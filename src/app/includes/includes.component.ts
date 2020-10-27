import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-includes',
  template: `
  
<div class="includes">

    <div>
      <app-header></app-header>
    </div>
    <router-outlet></router-outlet>
    <div>
      <app-footer></app-footer>
    </div>

</div>

  `,
  // templateUrl: './includes.component.html',
  styleUrls: ['./includes.component.scss']
})
export class IncludesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

