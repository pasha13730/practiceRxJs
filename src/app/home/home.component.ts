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

  beginnerCourses: Course[] ;
  advanceCourses: Course[] ;

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
       
        this.beginnerCourses = courses.filter(course => course.category == 'BEGINNER');
        
        this.advanceCourses = courses.filter(course => course.category == 'ADVANCED');

      }, //first callback

      error => console.log('error =>', error),   //error handling callback

      () => console.log('completed')  //completion callback
    );

    // if we want to yse RxJs as it was meant to be , we shouldavoid writing lots of logic 
    //inside subscribe , called imperative approach.


  }

}
