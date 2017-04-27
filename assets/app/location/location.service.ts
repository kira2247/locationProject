import { Http, Response, Headers } from "@angular/http";
import { Router } from "@angular/router";
import {Injectable, EventEmitter} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from 'rxjs';

import {Location} from "./location.model";

@Injectable()
export class LocationService{
  private locations: Location[] = [];

  locationIsEdit = new EventEmitter<Location>();

  constructor(private http: Http,private router: Router){}

  addLocation(location: Location){
    const body = JSON.stringify(location);
    const headers = new Headers({'Content-Type':'application/json'});
    return this.http.post('http://localhost:3000/location', body, {headers: headers})
          .map((response: Response)=> {
            const result = response.json();
            const location = new Location(result.obj.name,result.obj.address,result.obj.phoneNumber,result.obj.workTime,result.obj.goods,'Tan Huynh',result.obj._id,null);
            this.locations.push(location);
            return location;
          })
          .catch((error: Response)=> Observable.throw(error.json()));
  }

  getLocation(){
    return this.http.get('http://localhost:3000/location')
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

  editLocation(location: Location){
    let locationForm = document.getElementById("locationForm");
    locationForm.scrollIntoView();
    this.locationIsEdit.emit(location);
  }

  updateLocation(location: Location){
    const body = JSON.stringify(location);
    const headers = new Headers({'Content-Type':'application/json'});
    return this.http.patch('http://localhost:3000/location/'+ location.locationId , body, {headers: headers})
          .map((response: Response)=> response.json())
          .catch((error: Response)=> Observable.throw(error.json()));
  }

  deleteLocation(location:Location){
    this.locations.splice(this.locations.indexOf(location),1);
    return this.http.delete('http://localhost:3000/location/'+ location.locationId)
          .map((response: Response)=> response.json())
          .catch((error: Response)=> Observable.throw(error.json()));
  }
}
