import { createHttpObservable } from './common/util'
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators'
import { environment } from '../environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {

  toggle:boolean = true;

  constructor() { }

  ngOnInit() {

    //custom Observables // HTTP Observable

    const http$ = createHttpObservable(environment.SERVICE_BASE_URL); //  const http$ = Observable.create((observer) => {  //.create is deprecated

    const courses$ = http$
      .pipe(
        map(res => Object.values(res["payload"]))  //same with   map(res => res["payload"])
      );

      courses$.subscribe(
      (courses) => console.log(courses), //first callback
      error => console.log('error =>', error),   //error handling callback
      () => console.log('completed')  //completion callback
    );



  } //ngOnInit()

  toggleSidebar(){
    this.toggle = !this.toggle;
  }



}//class AppComponent
