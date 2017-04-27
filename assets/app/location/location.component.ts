import {Component,Input} from '@angular/core';

import {Location} from './location.model';
import {LocationService} from './location.service';

@Component({
  selector: 'app-location',
  templateUrl:'./location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent{
  @Input() location: Location;

  constructor(private locationService: LocationService){}

  onEdit(){
    this.locationService.editLocation(this.location);
  }

  onDelete(){
    this.locationService.deleteLocation(this.location)
        .subscribe(
          result => console.log(result)
        );
  }
}
