import { Component, OnInit } from '@angular/core';

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

    document.addEventListener('click', evt => {
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

   




  }

}
