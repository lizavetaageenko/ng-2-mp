import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {
  locations: Array<Object>;

  constructor() {
  }

  ngOnInit() {
    this.locations = [
      {name: 'lalalalala'},
      {name: 'hahahahaha'},
      {name: 'blablabla'}
    ];
  }

}
