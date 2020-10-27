import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  selected: string = '';
  promiseVal: any;

  constructor() { }

  dellAvail:object = {
      name: 'Dell',
      color: 'Silver',
      screenSize: '16 inch',
      availability: true
    }

  hpAvail = {
      name: 'HP',
      color: 'Grey',
      screenSize: '18 inch',
      availability: true
    }

  notAvail = {
    status : 'Not Available in the store , Check Later',
    availability: false
  }

  dellAvailable() {
    this.selected = 'dell'
    return false;
  }

  hpAvailable() {
    this.selected = 'hp'
    return false;
  }


  ngOnInit(): void {

    let buyLaptop = new Promise((resolve, reject) => {

      if (this.dellAvailable()) {
        return setTimeout(() => {
          // resolve('dell is purchased');
          resolve(this.dellAvail)
        }, 3000)

      }


      else if (this.hpAvailable()) {
        setTimeout(() => {
          resolve(this.hpAvail);
        }, 3000)
      }


      else {
        setTimeout(() => {
          reject('no purchase made');
        }, 3000)
      }


    })

    buyLaptop
      .then(res => {
        this.promiseVal = res;
        console.log('then Block :', res);
      })
      .catch(res => {
        this.promiseVal = res;
        console.log('catch Block :', res);
      })

  }
}

