import { Component } from '@angular/core';

@Component({
  selector:'app-locations',
  template:`
  <div class="row">
    <app-location-input></app-location-input>
  </div>
  <hr>
  <div class="row">
    <router-outlet></router-outlet>
  </div>
  `
})

export class LocationsComponent {

}
