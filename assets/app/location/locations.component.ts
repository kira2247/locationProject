import { Component } from '@angular/core';

@Component({
  selector:'app-locations',
  template:`
  <div class="row">
    <app-location-input></app-location-input>
  </div>
  <hr>
  <div class="row">
    <app-location-list></app-location-list>
  </div>
  `
})

export class LocationsComponent {

}
