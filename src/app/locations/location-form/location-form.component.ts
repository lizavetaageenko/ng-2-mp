import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { LocationObservableService } from '../location-observable.service';

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.css']
})
export class LocationFormComponent implements OnInit, OnDestroy {
  location: any;
  private sub: Subscription[] = [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private locationObservableService: LocationObservableService) { }

  ngOnInit() {
    this.location = {
      id: null,
      name: null
    };

    this.route.data.forEach((data: { location: any }) => {
      this.location = Object.assign({}, data.location);
    });
  }

  saveLocation() {
    let method = this.location.id ? 'updateLocation' : 'createLocation';

    let sub = this.locationObservableService[method](this.location)
      .subscribe( () => this.goBack() );

    this.sub.push(sub);
  }

  ngOnDestroy(): void {
    this.sub.forEach(sub => sub.unsubscribe());
  }

  goBack(): void {
    this.router.navigate(['locations']);
  }

  canDeactivate(): boolean {
    if (this.route.data.value && (this.location.name == this.route.data.value.location.name) || !this.location.name) {
      return true;
    }

    return confirm('Discard changes?');
  }
}
