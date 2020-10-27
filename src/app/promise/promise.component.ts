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

  dellAvail: object = {
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
    status: 'Not Available in the store , Check Later',
    availability: false
  }

  dellAvailable() {
    this.selected = 'dell'
    return true;
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
          reject(this.notAvail);
        }, 3000)
      }


    })

    buyLaptop
      .then(res => {
        this.promiseVal = JSON.stringify(res);
        console.log('then Block :', res);
      })
      .catch(res => {
        this.promiseVal = JSON.stringify(res);
        console.log('catch Block :', res);
      })




    // await and async

    // when we use async keyword prior to a function keyword then it always return a promise

    // async function getData() {
    //   return 'Data Recieved';
    // }

    // console.log(getData()); 

    // getData().then(console.log);




    //now lets create a new promise

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data Recieved after 2 seconds');
      }, 2000);

      setTimeout(() => {
        box1.innerText = 'Data Fetched Successfully !!!';
        box1.className = 'success-text';
      }, 6000)
    })

    async function getData() {

      promise.then(console.log); // one way , 2nd way below with await keyword

      let response = await promise; //no need to write promise.then() block a single await keyword will do , 'await' expressions are only allowed within async functions 

      // console.log('Response => ', response);

      console.log(await promise);

      return 'hello'
    }

    // console.log(getData()); // it will return a promise

    getData();

    // getData().then(console.log); // it will return whatever the getData() func is returning 'hello'


    //learning getElementbyId thing

    let box1 = document.getElementById('box1');

  }
}

