import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/share";

const URL = "api/global-config";

@Injectable()
export class ConfigService {
  config: Observable<Map<string,any>>;

  constructor(private http: Http) { }

  getConfig(): Observable<Map<string,any>> {
    if (!this.config) {
      this.config = this.http.get(URL).map((res: Response) => {
        let config = new Map<string,any>();

        let body = res.json();
        Object.keys(body).forEach((key: string) => {
          config.set(key, body[key]);
        });

        return config;
      })
      .share();
    }

    return this.config;
  }
}
