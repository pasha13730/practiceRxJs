import { Component, OnInit } from '@angular/core';
import { concat, interval, Observable, of } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const c1$ = of (1,2,3,8); 
    const c2$ = of ('a','b','c','d','z');
    const c3$ = of (4,5,6,7,9);
    const c4$ = interval(1000);

    // if a data stream never ends emitting value, then we will not get others data's stream output 
    // for eg if i add a data stream that never ends , i.e., interval() see what happens

    const c5$ = concat(c1$,c2$,c3$); 

    //orders matter if i put c4$ first then other wont come into picture
    // also u can write single obeservable more than once e.g. concat(c1$,c1$,c1$); 

     c5$.subscribe(console.log); //alternative to c3$.subscribe(val => console.log(val)); 


  }

}
