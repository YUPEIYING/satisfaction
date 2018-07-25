import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Extent } from './Extent';

@Injectable({
  providedIn: 'root'
})
export class ExtentService {

  private satisfactionUrl = 'api/satisfaction';

  constructor(private http: HttpClient) { }

  /** GET heroes from the server */
  getSN (): Observable<Extent[]> {
    return this.http.get<Extent[]>(this.satisfactionUrl)
    .pipe(
      catchError(this.handleError('getSN', []))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
