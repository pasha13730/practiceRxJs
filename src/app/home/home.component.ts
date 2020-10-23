import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators'
import { environment } from '../../environments/environment'
import { createHttpObservable } from '../common/util'
import { Course } from '../model/course';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  beginnerCourses$: Observable<Course[]>;
  advanceCourses$: Observable<Course[]>;
  

  constructor() { }

  ngOnInit() {

    //custom Observables // HTTP Observable

    const http$  = createHttpObservable(environment.SERVICE_BASE_URL); //  const http$ = Observable.create((observer) => {  //.create is deprecated

    const courses$ : Observable<Course[]> = http$
      .pipe(
        map(res => Object.values(res["payload"]))  //same with   map(res => res["payload"])
      );

    this.beginnerCourses$ = courses$
      .pipe(
        map((courses ) => courses.filter(course => course.category == 'BEGINNER' ))
      );

      this.advanceCourses$ = courses$
      .pipe(
        map((courses ) => courses.filter(course => course.category == 'ADVANCED' ))
      );
     
      //this is a reactive approach but when inspecting 


  }

}
