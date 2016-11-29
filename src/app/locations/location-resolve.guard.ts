import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import {Observable} from 'rxjs/Observable';

import { LocationObservableService } from './location-observable.service';

@Injectable()
export class LocationResolveGuard implements Resolve<any> {

  constructor(
    private locationObservableService: LocationObservableService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> | any {
    return this.locationObservableService.getLocation(+route.params['id']);
  }
}
