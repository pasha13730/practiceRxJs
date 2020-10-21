
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {

  toggle:boolean = true;

  constructor() { }

  ngOnInit() {

    
  } //ngOnInit()

  toggleSidebar(){
    this.toggle = !this.toggle;
  }



}//class AppComponent
