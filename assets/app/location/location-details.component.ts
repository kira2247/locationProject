import {Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {Location} from './location.model';
import {LocationService} from './location.service';

@Component({
  selector: 'app-location-details',
  template: `<article class="panel panel-default" >
        <div class="panel-body">
          <div class="row">
            <div class="col-md-4">
              <div class="locationName">
                <h4>{{location?.name}}</h4>
              </div>
            </div>
            <div class="col-md-4">
              <div class="locationAddress">
                Address: {{location?.address}}
              </div>
            </div>
            <div class="col-md-4">
              <div class="locationWorkTime">
                Work Time: {{location?.workTime}}
              </div>
            </div>
          </div>
          <div class="phoneNumber">
              <section>
                Phone Number: {{location?.phoneNumber}}
              </section>
          </div>
          <div class="locationMenu">
            <section>
              <h4>Menu:</h4>
              <ul>
                <li>
                  {{location?.goods}}
                </li>
              </ul>
            </section>
          </div>
        </div>
        <footer class="panel-footer">
          <div class="poster">
            Posted by: {{location?.username}}
          </div>
          <div class="config">
            <a (click)="onEdit()">Edit</a>
            <a (click)="onDelete()">Delete</a>
          </div>
        </footer>
  </article>
`,
  styleUrls: ['./location.component.css']
})

export class LocationDetailsComponent implements OnInit {

  @Input() location: Location;

  constructor(private locationService: LocationService, private activatedRoute: ActivatedRoute){}

  ngOnInit(){
      this.locationService.getDetailsLocation(this.activatedRoute.snapshot.params.id)
          .subscribe((location: Location)=>{
              this.location = location;
            }
          );
  }

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
