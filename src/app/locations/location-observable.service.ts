import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import './../rxjs-extensions';

@Injectable()
export class LocationObservableService {
  private locationUrl: string = 'http://localhost:3000/location';

  constructor(private http: Http) {
  }

  getLocations(): Observable<Object[]> {
    return this.http.get(this.locationUrl)
      .map(this.handleData)
      .catch(this.handleError);
  }

  getLocation(id:number) {
    return this.http.get(`${this.locationUrl}/${id}`)
      .map(this.handleData)
      .catch(this.handleError);
  }

  updateLocation(location: any) {
    let url = `${this.locationUrl}/${location.id}`,
      body = JSON.stringify(location),
      headers = new Headers({'Content-Type': 'application/json'}),
      options = new RequestOptions({headers: headers});

    return this.http.put(url, body, options)
      .map(this.handleData)
      .catch(this.handleError);
  }

  createLocation(location: any): Observable<Object> {
    const url = this.locationUrl,
      body = JSON.stringify(location),
      headers = new Headers({'Content-Type': 'application/json'}),
      options = new RequestOptions({headers: headers});

    return this.http.post(url, body, options)
      .map(this.handleData)
      .catch(this.handleError);
  }


  deleteLocation(location: any) {
    let url = `${this.locationUrl}/${location.id}`;

    return this.http.delete(url)
      .map(this.handleData)
      .catch(this.handleError);
  }

  private handleData(response: Response) {
    let body = response.json();
    return body || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message)
      ? error.message
      : error.status
      ? `${error.status} - ${error.statusText}`
      : 'Server error';

    console.error(errMsg);

    return Observable.throw(errMsg);
  }
}
