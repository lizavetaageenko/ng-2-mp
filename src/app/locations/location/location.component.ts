import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  @Input()  location: any;
  @Output() onDelete = new EventEmitter<any>();

  constructor(private router: Router) {
  }

  editLocation(location: any) {
    this.router.navigate(['locations', 'edit', location.id]);
  }

  deleteLocation(location: any) {
    this.onDelete.emit(location);
  }
}
