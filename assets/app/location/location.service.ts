import { Http, Response, Headers } from "@angular/http";
import { Router } from "@angular/router";
import {Injectable, EventEmitter} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from 'rxjs';

import {Location} from "./location.model";

@Injectable()
export class LocationService{
  private locations: Location[] = [];
  private location: Location;

  locationIsEdit = new EventEmitter<Location>();

  constructor(private http: Http,private router: Router){}

  addLocation(location: Location){
    const body = JSON.stringify(location);
    const headers = new Headers({'Content-Type':'application/json'});
    return this.http.post('https://app-location.herokuapp.com/location', body, {headers: headers})
          .map((response: Response)=> {
            const result = response.json();
            const location = new Location(result.obj.name,result.obj.address,result.obj.phoneNumber,result.obj.workTime,result.obj.goods,'Tan Huynh',result.obj._id,null);
            this.locations.push(location);
            return location;
          })
          .catch((error: Response)=> Observable.throw(error.json()));
  }

  getLocation(){
    return this.http.get('https://app-location.herokuapp.com/location')
          .map((response: Response)=>{
            const locations = response.json().obj;
            let transformedLocations: Location[] = [];
            for (let location of locations){
              transformedLocations.push(new Location(location.name,location.address,location.phoneNumber,location.workTime,location.goods,'Tan Huynh',location._id, null));
            }
            this.locations = transformedLocations;
            return transformedLocations;
          })
          .catch((error: Response)=> Observable.throw(error.json()));
  }

  getDetailsLocation(locationId){
    return this.http.get('https://app-location.herokuapp.com/location/details/'+locationId)
          .map((response: Response)=>{
            const location = response.json().obj;
            let transformLocation: Location;
            transformLocation = new Location(location.name,location.address,location.phoneNumber,location.workTime,location.goods,'Tan Huynh',location._id, null);
            this.location = transformLocation;
            return transformLocation;
          })
          .catch((error: Response)=> Observable.throw(error.json()));
  }

  editLocation(location: Location){
    let locationForm = document.getElementById("locationForm");
    locationForm.scrollIntoView();
    this.locationIsEdit.emit(location);
  }

  updateLocation(location: Location){
    const body = JSON.stringify(location);
    const headers = new Headers({'Content-Type':'application/json'});
    return this.http.patch('https://app-location.herokuapp.com/location/'+ location.locationId , body, {headers: headers})
          .map((response: Response)=> response.json())
          .catch((error: Response)=> Observable.throw(error.json()));
  }

  deleteLocation(location:Location){
    if(this.location){
      this.router.navigateByUrl('/location');
      this.location = null;
    }else{
    this.locations.splice(this.locations.indexOf(location),1);
    }
    return this.http.delete('https://app-location.herokuapp.com/location/'+ location.locationId)
          .map((response: Response)=> response.json())
          .catch((error: Response)=> Observable.throw(error.json()));
  }
}
