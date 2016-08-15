'use strict'

import {Injectable} from '@angular/core'

import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'

const API = {
  logout: 'api/logout'
}

@Injectable()
export class LogoutService {

  private http: Http

  constructor(http: Http) {
    this.http = http
  }

  logout(): Observable<{success: string}> {
    return this.http.get(API.logout)
                    .map((res:Response) => res.json())
  }
}
