import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { LocationListComponent } from './location-list/location-list.component';
import { LocationFormComponent } from './location-form/location-form.component';

import {LocationResolveGuard} from './location-resolve.guard';
import { LocationObservableService } from './location-observable.service';
import { LocationComponent } from './location/location.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LocationsRoutingModule
  ],
  declarations: [LocationListComponent, LocationFormComponent, LocationComponent],
  providers: [
    LocationObservableService,
    LocationResolveGuard
  ]
})
export class LocationsModule { }
