import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MainComponent } from './main/main.component';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ExtentService {

  private satisfactionUrl = 'http://10.101.2.9/api/satisfaction';

  constructor(private http: HttpClient) { }

  /** GET heroes from the server 
  getSN ():Observable<Extent> {
    return this.http.get<Extent>(this.satisfactionUrl)
  }*/

    /** POST: add to the database */
    addsatisfydegree (CS: MainComponent): Observable<MainComponent> {
      CS = CS.x;
      console.log(CS);
      return this.http.post<MainComponent>(this.satisfactionUrl, CS, httpOptions);
    }
 

}
