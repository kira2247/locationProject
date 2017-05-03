import {Routes} from '@angular/router';

import {LocationDetailsComponent} from './location-details.component';
import {LocationListComponent} from './location-list.component';

export const LOCATION_ROUTES: Routes =[
  {path:'' , component: LocationListComponent},
  {path:'details/:id', component: LocationDetailsComponent}
];
