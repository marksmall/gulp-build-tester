import {Injectable} from '@angular/core'
import {Http, Response, Headers} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

import {NotUserDto} from './not-user'

const API = {
  notuser: 'api/user/not'
}

@Injectable()
export class NotUserService {
  constructor(private http: Http) {
  }

  /**
   * Get the current user state which can be viewed/modified by the update user
   * function. Rethrows errors as an observable.
   */
  getNotUser(): Observable<NotUserDto> {
    return this.http.get(API.notuser)
                    .catch((err:Response) => Observable.throw(err.json()))
                    .map((res:Response) => res.json())
  }

  /**
   * Set the details changed in the update user function. This will return an observable
   * boolean which will be true on success, as a placeholder. If an error occurs (e.g an
   * error response from the updateuser service, the exception will be rethrown for
   * use by the calling component.
   */
  setNotUser(notUserDto: NotUserDto): Observable<boolean> {
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    return this.http.put(API.notuser,
                         JSON.stringify(notUserDto),
                         { headers: headers })
                    .catch((err:Response) => Observable.throw(err.json()))
                    .map((res:Response) => true)
  }
}
