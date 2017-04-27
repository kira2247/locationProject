import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

import {LocationService} from './location.service';
import {Location} from './location.model';

@Component({
  selector: 'app-location-input',
  templateUrl: './location-input.component.html',
})

export class LocationInputComponent implements OnInit {

  location: Location;

  constructor(private locationService: LocationService){}

  onSubmit(form: NgForm){
    if (this.location){
      //Edit
      this.location.name = form.value.name;
      this.location.address = form.value.address;
      this.location.phoneNumber = form.value.phoneNumber;
      this.location.workTime = form.value.workTime;
      this.location.goods = form.value.goods;

      this.locationService.updateLocation(this.location)
          .subscribe(
            result => console.log(result)
          );

      this.location =null;
    } else{
      //Create
      const location = new Location(form.value.name,form.value.address,form.value.phoneNumber,form.value.workTime,form.value.goods,'Tan huynh');
      this.locationService.addLocation(location)
          .subscribe(
            data => console.log(data),
            error => console.error(error)
          );
    }
    form.resetForm();
  }

  onClear(form: NgForm){
    this.location = null;
    form.resetForm();
  }

  ngOnInit(){
    this.locationService.locationIsEdit.subscribe(
      (location: Location)=> this.location = location
    );
  }
}
