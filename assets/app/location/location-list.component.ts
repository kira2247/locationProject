import {Component, OnInit} from '@angular/core';

import {Location} from './location.model';
import {LocationService} from './location.service';

@Component({
  selector: 'app-location-list',
  template: `
  <div class="col-md-8 col-md-offset-2">
    <app-location [location]="location" *ngFor="let location of locations"></app-location>
  </div>
  `
})

export class LocationListComponent implements OnInit {
  locations: Location[] = [];

  constructor(private locationService: LocationService){}

  ngOnInit(){
    this.locationService.getLocation()
        .subscribe(
        (locations: Location[])=>{
          this.locations = locations;
        }
        );
  }
}
