'use strict';

function random(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);

}

let div = document.getElementById('Container');


const time = [
  '6:00am',
  '7:00am',
  '8:00am',
  '9:00am',
  '10:00am',
  '11:00am',
  '12:00pm',
  '1:00pm',
  '2:00pm',
  '3:00pm',
  '4:00pm',
  '5:00pm',
  '6:00pm',
  '7:00pm',
  '8:00pm',
  'Daily Location Total'
];
let tableEl = document.createElement('table');

let headerTable = function(){


  div.appendChild(tableEl);
  let trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  let thEl = document.createElement('th');
  thEl.innerHTML = '&nbsp;';
  trEl.appendChild(thEl);
  for (let i = 0; i < time.length; i++) {
    thEl = document.createElement('th');



    thEl.textContent = time[i];
    trEl.appendChild(thEl);

  }

};




const Sales = function (location, the_Min_Hourly_Customers, the_Max_Hourly_Customers, avg, getCustomerHourArray, getCookiesHourArray, total) {

  this.location = location;
  this.the_Min_Hourly_Customers = the_Min_Hourly_Customers;
  this.the_Max_Hourly_Customers = the_Max_Hourly_Customers;
  this.avg = avg;
  this.getCustomerHourArray = getCustomerHourArray;
  this.getCookiesHourArray = getCookiesHourArray;
  this.total = total;

};

Sales.prototype.customer_per_hour = function () {

  let randomGenerate;
  for (let i = 0; i < time.length; i++) {
    randomGenerate = random(this.the_Max_Hourly_Customers, this.the_Min_Hourly_Customers);
    this.getCustomerHourArray.push(randomGenerate);

  }


};

Sales.prototype.avg_per_hour = function () {
  let avgResult = 1;

  for (let i = 0; i < time.length; i++) {
    avgResult = Math.floor(this.getCustomerHourArray[i] * this.avg);
    this.getCookiesHourArray.push(avgResult);
  }

};

Sales.prototype.render = function () {
  // let pEl = document.createElement('p');
  // div.appendChild(pEl);

  // let ulEl = document.createElement('ul');
  // div.appendChild(ulEl);


  // pEl.textContent = this.location;

  // for (let i = 0; i < time.length; i++) {
  //   let liEl = document.createElement('li');
  //   ulEl.appendChild(liEl);
  //   if ((time.length - 1) === i) {
  //     liEl.textContent = `${time[i]} : ${this.total} cookies `;

  //   }
  //   else {

  //     liEl.textContent = `${time[i]} : ${this.getCookiesHourArray[i]} cookies `;
  //     this.total = this.total + this.getCookiesHourArray[i];
  //   }
  // }

  let tr2El = document.createElement('tr');
  tableEl.appendChild(tr2El);
  let tdEl = document.createElement('td');
  tdEl.textContent = `${this.location}`;
  tr2El.appendChild(tdEl);
  for (let i = 0; i < time.length; i++) {
    let tdEl = document.createElement('td');
    if ((time.length - 1) === i) {
      tdEl.textContent = `${this.total}`;
      tr2El.appendChild(tdEl);

    }
    else {

      tdEl.textContent = `${this.getCookiesHourArray[i]}`;
      this.total = this.total + this.getCookiesHourArray[i];
      tr2El.appendChild(tdEl);
    }
  }



};



headerTable();

const seattle = new Sales('Seattle', 23, 65, 6.3, [], [], 0);


seattle.customer_per_hour();
seattle.avg_per_hour();
seattle.render();

const tokyo = new Sales('Tokyo', 3, 24, 1.2, [], [], 0);


tokyo.customer_per_hour();
tokyo.avg_per_hour();
tokyo.render();


const dubai = new Sales('Dubai', 11, 38, 1.3, [], [], 0);


dubai.customer_per_hour();
dubai.avg_per_hour();
dubai.render();


const paris = new Sales('Paris', 20, 38, 2.3, [], [], 0);


paris.customer_per_hour();
paris.avg_per_hour();
paris.render();



const lima = new Sales('Lima', 2, 16, 4.6, [], [], 0);


lima.customer_per_hour();
lima.avg_per_hour();
lima.render();

let footerTable  = function(){

  let tr2El = document.createElement('tr');
  tableEl.appendChild(tr2El);
  let tdEl = document.createElement('th');
  tdEl.textContent = 'Total';
  tr2El.appendChild(tdEl);

  for (let i = 0; i < time.length; i++) {
    tdEl = document.createElement('th');

    if((time.length-1)===i){
      tdEl.textContent =
    seattle.total +
    tokyo.total +
    dubai.total +
    paris.total +
    lima.total ;
      tr2El.appendChild(tdEl);
    }
    else{
      tdEl.textContent = seattle.getCookiesHourArray[i] +
    tokyo.getCookiesHourArray[i] +
    dubai.getCookiesHourArray[i] +
    paris.getCookiesHourArray[i] +
    lima.getCookiesHourArray[i] ;
      tr2El.appendChild(tdEl);
    }
  }
};

footerTable();
