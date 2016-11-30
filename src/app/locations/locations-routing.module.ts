import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LocationResolveGuard} from './location-resolve.guard';
import { CanDeactivateGuard }    from './location-can-deactivate.guard';
import {LocationListComponent} from './location-list/location-list.component';
import {LocationFormComponent} from './location-form/location-form.component';

const locationsRoutes: Routes = [
  {path: '', component: LocationListComponent},
  {path: 'new', component: LocationFormComponent},
  {
    path: 'edit/:id',
    component: LocationFormComponent,
    resolve: { location: LocationResolveGuard },
    canDeactivate: [CanDeactivateGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(locationsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LocationsRoutingModule {
}
