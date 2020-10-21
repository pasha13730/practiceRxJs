import { noop } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment'
import { fromEvent, interval, observable, Observable, Observer, timer } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //custom Observables // HTTP Observable

    //  const http$ = Observable.create((observer) => {
     const http$ = new Observable((observer) => {

       fetch(environment.SERVICE_BASE_URL)
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

     http$.subscribe(

       (courses) => console.log('courses => ', courses), //first callback
        error => console.log('error =>',error),   //error handling callback
       () => console.log('completed')  //completion callback
     );

  } //ngOnInit()

}//class AppComponent
