import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

const URL = "api/user/register/verify";

@Injectable()
export class VerifyService {
  constructor(private http: Http) { }

  verify(token: String): Observable<boolean> {
    return this.http.get(`${URL}/${token}`).map((res: Response) => {
      return res.json().message === "success";
    });
  }
}
