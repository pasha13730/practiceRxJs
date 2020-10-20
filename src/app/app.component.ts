import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, timer } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let message;
    message = 'Programming';

    let endsWithG = (message as string).endsWith('g');
    let startsWithP = (<string>message).startsWith('P');
    let upperCase = (message as string).toUpperCase();
    let lowerCase = (<string>message).toLocaleLowerCase(); // difference b/w ttoLocaleLowerCase() and  toLowerCase () ??
    // let endsWithG = (<string>message).endsWith('g');

    console.log("endsWithG", endsWithG);
    console.log("startsWithP", startsWithP);
    console.log("upperCase", upperCase);
    console.log("lowerCase", lowerCase);

    document.addEventListener('resize', evt => {
      let counter = 0;
      console.log(evt); // MultiValue Data Stream // Synchronus Opeartion

      setTimeout(() => {

        setInterval(() => {
          counter++;
          console.log("counter",counter);  // MultiValue Data Stream // Synchronus Opeartion
        }, 1000);

        console.log("started in 3s...");  // SingleValue Data Stream // Synchronus Opeartion
      }, 3000);
    })

    const interval$ = interval(1000);  //this interval$ is an observable of number means it emitting value numbers 0,1,2,3,4 etc

    interval$.subscribe(evt => console.log('data stream 1 =>',evt + 1));

     interval$.subscribe(evt => console.log('data stream 2 =>',evt + 1));
    
    const timer$ = timer(3000,1000); // observable is a blue print of a stream
    
    // timer$.subscribe(evt => console.log('data stream 3 =>',evt + 1));

    const click$= fromEvent(document,'click');

    // click$.subscribe((evt) => {console.log('click event 1 =>',evt)});

    // click$.subscribe(evt => console.log('click event 2 =>',evt));

  }

}
