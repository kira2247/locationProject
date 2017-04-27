import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from "./app.component";
import { LocationComponent } from "./location/location.component";
import { LocationListComponent} from "./location/location-list.component";
import { LocationInputComponent } from "./location/location-input.component";
import { LocationsComponent } from './location/locations.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { HeaderComponent } from './header.component';
import { routing } from './app.routing';
import { LogoutComponent } from './auth/logout.component';
import { SignupComponent } from './auth/signup.component';
import { SigninComponent } from './auth/signin.component';

@NgModule({
    declarations: [
      AppComponent,
      LocationComponent,
      LocationListComponent,
      LocationInputComponent,
      LocationsComponent,
      AuthenticationComponent,
      HeaderComponent,
      LogoutComponent,
      SignupComponent,
      SigninComponent
    ],
    imports: [BrowserModule, FormsModule, routing , ReactiveFormsModule, HttpModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}
