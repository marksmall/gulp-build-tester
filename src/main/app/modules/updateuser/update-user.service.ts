import {Injectable} from '@angular/core'
import {Http, Response, Headers} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

import {UpdateUserDto} from './update-user'

let query = require('query-string')

const API = {
  update: 'api/user/update',
}

@Injectable()
export class UpdateUserService {
  constructor(private http: Http) {
  }

  /**
   * Get the current user state which can be viewed/modified by the update user
   * function. Rethrows errors as an observable.
   */
  getUpdateUser(): Observable<UpdateUserDto> {
    return this.http.get(API.update)
                    .catch((err:Response) => Observable.throw(err.json()))
                    .map((res:Response) => res.json())
  }

  /**
   * Set the details changed in the update user function. If an error occurs (e.g an
   * error response from the updateuser service, the exception will be rethrown for
   * use by the calling component.
   */
  setUpdateUser(updateUserDto: UpdateUserDto): Observable<void> {
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    return this.http.put(API.update,
                         JSON.stringify(updateUserDto),
                         { headers: headers })
                    .catch((err:Response) => Observable.throw(err.json()))
                    .map((res:Response) => null)
  }
}
