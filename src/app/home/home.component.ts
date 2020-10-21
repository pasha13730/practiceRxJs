import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators'
import { environment } from '../../environments/environment'
import { createHttpObservable } from '../common/util'
import { Course } from '../model/course';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  beginner: Course[] = [];
  advanced: Course[] = [];

  constructor() { }

  ngOnInit() {

    //custom Observables // HTTP Observable

    const http$ = createHttpObservable(environment.SERVICE_BASE_URL); //  const http$ = Observable.create((observer) => {  //.create is deprecated

    const courses$ = http$
      .pipe(
        map(res => Object.values(res["payload"]))  //same with   map(res => res["payload"])
      );

    courses$.subscribe(
      (courses:Course[]) => {
        console.log(courses);
        this.beginner=courses.filter(x => x['category'] == 'BEGINNER');
      }, //first callback
      error => console.log('error =>', error),   //error handling callback
      () => console.log('completed')  //completion callback
    );




  }

}
