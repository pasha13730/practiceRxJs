import { Observable } from "rxjs";
import { Course } from '../model/course';



export function createHttpObservable(url: string): Observable<Course[]> {
    return new Observable((observer) => {

      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((body) => {
          observer.next(body);
          observer.complete();
        })
        .catch(err => {
          observer.error(err);
          //  console.log(err);
        })
    });
  }