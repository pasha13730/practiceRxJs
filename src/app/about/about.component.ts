import { Component, OnInit } from '@angular/core';
import { concat, Observable, of } from 'rxjs';

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
    
    const c4$ = concat(c1$,c2$,c3$);

     c4$.subscribe(console.log); //alternative to c3$.subscribe(val => console.log(val)); 


  }

}
