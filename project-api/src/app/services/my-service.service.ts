import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { MyClass } from '../classes/my-class';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class MyServiceService {

  private myUrl = 'api/mydata';

  constructor(private http: Http) {}

  getClass(): Observable<MyClass[]>{
    return this.http
      .get(this.myUrl)
      .map(this.extractData)
      .do(data=>console.log(data))
      .catch(this.handleError);
  }

  private extractData(res: Response){
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
