import {createHttpObservable} from './common/util'
import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //custom Observables // HTTP Observable

    //  const http$ = Observable.create((observer) => {  //.create is deprecated
    const http$ = createHttpObservable(environment.SERVICE_BASE_URL);

    http$.subscribe(
      (courses) => console.log(courses), //first callback
      error => console.log('error =>', error),   //error handling callback
      () => console.log('completed')  //completion callback
    );

    

  } //ngOnInit()

}//class AppComponent
