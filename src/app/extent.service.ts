import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Extent } from './extent/Extent';

@Injectable({
  providedIn: 'root'
})
export class ExtentService {

  private satisfactionUrl = 'api/satisfaction';

  constructor(private http: HttpClient) { }

  /** GET heroes from the server */
  getHeroes (): Observable<Extent[]> {
    return this.http.get<Extent[]>(this.satisfactionUrl)
  }

}
