import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import {LocationObservableService} from '../location-observable.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {
  locations: Array<Object>;
  private sub: Subscription[] = [];

  constructor(private router: Router,
              private locationObservableService: LocationObservableService) {
  }

  ngOnInit() {
    let sub = this.locationObservableService.getLocations()
      .subscribe(
        locations => this.locations = locations
      );
    this.sub.push(sub);
  }

  ngOnDestroy() {
    this.sub.forEach(sub => sub.unsubscribe());
  }

  createLocation() {
    this.router.navigate(['locations', 'new']);
  }

  deleteLocation(location: any) {
    let sub = this.locationObservableService.deleteLocation(location)
      .subscribe(() => {
        this.locations = this.locations.filter(t => t !== location);
      });

    this.sub.push(sub);
  }
}
