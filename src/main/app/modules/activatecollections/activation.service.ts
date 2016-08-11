import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

import {ActivateCollectionsDto} from "./activatecollections";

const API = {
  activated: "api/activate"
};

@Injectable()
export class ActivationService {
  constructor(private http: Http) {
  }

  /**
   * Get activations for subscribed collections.
   */
  getActivations(): Observable<ActivateCollectionsDto> {
    return this.http.get(API.activated)
                    .catch((err:Response) => Observable.throw(err.json()))
                    .map((res:Response) => res.json());
  }

  /**
   * Set updated activations.
   */
  setActivations(collections: ActivateCollectionsDto[]): Observable<void> {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.put(API.activated,
                         JSON.stringify(collections),
                         { headers: headers })
                    .catch((err:Response) => Observable.throw(err.json()))
                    .map((res:Response) => null);
  }
}
