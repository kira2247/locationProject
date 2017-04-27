import { Component } from '@angular/core';

import {LocationService} from './location/location.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers:[LocationService]
})
export class AppComponent {

}
