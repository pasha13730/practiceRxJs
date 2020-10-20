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
          console.log("counter", counter);  // MultiValue Data Stream // Synchronus Operation
        }, 1000);

        console.log("started in 3s...");  // SingleValue Data Stream // Synchronus Operation
      }, 3000);
    })

    const interval$ = interval(1000);  //this interval$ is an observable of number means it emitting value numbers 0,1,2,3,4 etc

    const sub1 = interval$.subscribe(evt => console.log('data stream 1 =>', evt + 2));

    const sub2 = interval$.subscribe(evt => console.log('data stream 2 =>', evt + 5));

    const sub3 = interval$.subscribe((evt: number) => { console.log('data stream 3 =>', evt + 1) });

    const sub4 = interval$.subscribe((evt: number) => { console.log('data stream 4 => ', evt + 12) }, error => console.log(error), () => { console.log('data stream completed') });

    setTimeout(() => {

      sub3.unsubscribe();
      console.log('unsubscribing data stream 3');

      sub4.unsubscribe();
      console.log('unsubscribing data stream 4');

    }, 5000);

    setTimeout(() => {

      sub1.unsubscribe();
      console.log('unsubscribing data stream 1');

      sub2.unsubscribe();
      console.log('unsubscribing data stream 2');

    }, 3000);



    const timer$ = timer(3000, 1000); // observable is a blue print of a stream

    const sub5 = timer$.subscribe(evt => console.log('data stream 5 =>',evt + 1));

    setTimeout(() => {

      sub5.unsubscribe();
      console.log('unsubscribing data stream 5');

      subClick.unsubscribe();
      console.log('unsubscribing click event');

    }, 10000);

    const click$ = fromEvent(document, 'click');

    const subClick = click$.subscribe((evt) => {console.log('click event 1 =>',evt)});

    // click$.subscribe(evt => console.log('click event 2 =>',evt));


  }

}
