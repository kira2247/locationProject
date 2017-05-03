import {Routes, RouterModule} from '@angular/router';

import {LocationsComponent} from './location/locations.component';
import {AuthenticationComponent} from './auth/authentication.component';
import {LocationDetailsComponent} from './location/location-details.component';
import { AUTH_ROUTES } from './auth/auth.routes';
import { LOCATION_ROUTES } from './location/location.routes';

const APP_ROUTES: Routes = [
  {path:'', redirectTo:'/location', pathMatch:'full'},
  {path:'location', component:LocationsComponent, children:LOCATION_ROUTES},
  {path:'auth', component:AuthenticationComponent, children:AUTH_ROUTES}
]

export const routing = RouterModule.forRoot(APP_ROUTES);
