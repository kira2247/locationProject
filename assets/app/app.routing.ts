import {Routes, RouterModule} from '@angular/router';

import {LocationsComponent} from './location/locations.component';
import {AuthenticationComponent} from './auth/authentication.component';
import { AUTH_ROUTES } from './auth/auth.routes';

const APP_ROUTES: Routes = [
  {path:'', redirectTo:'/location', pathMatch:'full'},
  {path:'location', component:LocationsComponent},
  {path:'auth', component:AuthenticationComponent, children:AUTH_ROUTES}
]

export const routing = RouterModule.forRoot(APP_ROUTES);
