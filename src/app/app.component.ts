import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
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

    const interval$ = interval(4000);  //this interval$ is an observable of number means it emitting value numbers 0,1,2,3,4 etc

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

    }, 6000);



    const timer$ = timer(3000, 2000); // observable is a blue print of a data stream

    const sub5 = timer$.subscribe(evt => console.log('data stream 5 =>', evt + 1));

    setTimeout(() => {

      sub5.unsubscribe();
      console.log('unsubscribing data stream 5');

      subClick.unsubscribe();
      console.log('unsubscribing click event 1');

    }, 7000);

    const click$ = fromEvent(document, 'click');  // observable is a blue print of a data stream

    const subClick = click$.subscribe((evt) => { console.log('click event 1 =>', evt) });

    click$.subscribe(

      evt => console.log('click event 2 =>', evt),

      error => console.log(error),

      () => console.log('completed')

    );

    const numbers = interval(1000);  //no need to write $ sign after observable , it is just to represent an observable

    const takeFourNumbers = numbers.pipe(take(10));

    const sub6 = takeFourNumbers.subscribe(

      x => console.log(' data stream 6 =>', x + 1),

      error => console.log(error),

      () => console.log('data stream 6 => completed')


    );

    setTimeout(() => {

      sub6.unsubscribe();
      console.log('unsubscribing data stream 6');

    },11000);

  }

}


/*
The Observable Contract and Error Handling
In order to understand error handling in RxJs, we need to first understand that any given stream can only error out once. This is defined by the Observable contract, which says that a stream can emit zero or more values.

The contract works that way because that is just how all the streams that we observe in our runtime work in practice. Network requests can fail, for example.

A stream can also complete, which means that:

the stream has ended its lifecycle without any error
after completion, the stream will not emit any further values
As an alternative to completion, a stream can also error out, which means that:

the stream has ended its lifecycle with an error
after the error is thrown, the stream will not emit any other values
Notice that completion or error are mutually exclusive:

if the stream completes, it cannot error out afterwards
if the streams errors out, it cannot complete afterwards
Notice also that there is no obligation for the stream to complete or error out, those two possibilities are optional. But only one of those two can occur, not both.

This means that when one particular stream errors out, we cannot use it anymore, according to the Observable contract.
*/
