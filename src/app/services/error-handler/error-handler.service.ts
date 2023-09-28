import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() { }

  handleError(error: any, locationErrorMessage: string): Observable<any>{
    switch(error.status){
      //BadRequest Exception (400)
      case 400:
        console.error(
          locationErrorMessage + ' | Invalid request - ' + error.error.message
        );
        return throwError(() => error);
      //Authorization Exception (401)
      case 401:
        console.error(
          locationErrorMessage + ' | This user is not authenticated - ' + error.error.message
        );
        return throwError(() => error);
      //Forbidden Exception (403)
      case 403:
        console.error(
          locationErrorMessage + ' | This user can get not access this source - ' + error.error.message
        );
        return throwError(() => error);
      //NotFound Exception (404) 
      case 404:
        console.error(
          locationErrorMessage + ' | Page Not Found - ' + error.error.message
        );
        return throwError(() => error);
      //Conflict Exception (409)
      case 409:
        console.error(
          locationErrorMessage + ' | There are others elements depending on this one, try removing them first - ' + error.error.message
        );
        return throwError(() => error);
      //Unprocessable (422)
      case 422:
        console.error(
          locationErrorMessage + ' | A data value already exists in hte database - ' + error.error.message
        );
        return throwError(() => error);
      //Internal Server Error 500
      case 500:
        console.error(
          locationErrorMessage + ' | A server error has happened - ' + error.error.message
        );
        return throwError(() => error);
      //Unknown errors
      default:
        console.error(locationErrorMessage + '| ' + error.error.message);
        return throwError(() => error);
    }
  }
}
