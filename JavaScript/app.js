'use strict';

function random(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);

}

let div = document.getElementById('Container');


const time = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
  '8pm',
  'Total'
];




const seattle = {
  location: 'Seattle',
  the_Min_Hourly_Customers: 23,
  the_Max_Hourly_Customers: 65,
  avg: 6.3,
  getCustomerHourArray: [],
  getCookiesHourArray: [],
  total: 0,

  customer_per_hour: function () {

    let randomGenerate;
    for (let i = 0; i < time.length; i++) {
      randomGenerate = random(this.the_Max_Hourly_Customers, this.the_Min_Hourly_Customers);
      this.getCustomerHourArray.push(randomGenerate);

    }


  },

  avg_per_hour: function () {
    let avgResult = 1;

    for (let i = 0; i < time.length; i++) {
      avgResult = Math.floor(this.getCustomerHourArray[i] * this.avg);
      this.getCookiesHourArray.push(avgResult);
    }

  },

  render: function () {
    let pEl = document.createElement('p');
    div.appendChild(pEl);

    let ulEl = document.createElement('ul');
    div.appendChild(ulEl);


    pEl.textContent = this.location;

    for (let i = 0; i < time.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      if ((time.length - 1) === i) {
        liEl.textContent = `${time[i]} : ${this.total} cookies `;

      }
      else {

        liEl.textContent = `${time[i]} : ${this.getCookiesHourArray[i]} cookies `;
        this.total = this.total + this.getCookiesHourArray[i];
      }
    }


  }



};
seattle.customer_per_hour();
seattle.avg_per_hour();
seattle.render();


const tokyo = {
  location: 'Tokyo',
  the_Min_Hourly_Customers: 3,
  the_Max_Hourly_Customers: 24,
  avg: 1.2,
  getCustomerHourArray: [],
  getCookiesHourArray: [],
  total: 0,

  customer_per_hour: function () {

    let randomGenerate;
    for (let i = 0; i < time.length; i++) {
      randomGenerate = random(this.the_Max_Hourly_Customers, this.the_Min_Hourly_Customers);
      this.getCustomerHourArray.push(randomGenerate);

    }


  },

  avg_per_hour: function () {
    let avgResult = 1;

    for (let i = 0; i < time.length; i++) {
      avgResult = Math.floor(this.getCustomerHourArray[i] * this.avg);
      this.getCookiesHourArray.push(avgResult);
    }

  },

  render: function () {
    let pEl = document.createElement('p');
    div.appendChild(pEl);

    let ulEl = document.createElement('ul');
    div.appendChild(ulEl);


    pEl.textContent = this.location;

    for (let i = 0; i < time.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      if ((time.length - 1) === i) {
        liEl.textContent = `${time[i]} : ${this.total} cookies `;

      }
      else {

        liEl.textContent = `${time[i]} : ${this.getCookiesHourArray[i]} cookies `;
        this.total = this.total + this.getCookiesHourArray[i];
      }
    }


  }



};
tokyo.customer_per_hour();
tokyo.avg_per_hour();
tokyo.render();



const dubai = {
  location: 'Dubai',
  the_Min_Hourly_Customers: 11,
  the_Max_Hourly_Customers: 38,
  avg: 3.7,
  getCustomerHourArray: [],
  getCookiesHourArray: [],
  total: 0,

  customer_per_hour: function () {

    let randomGenerate;
    for (let i = 0; i < time.length; i++) {
      randomGenerate = random(this.the_Max_Hourly_Customers, this.the_Min_Hourly_Customers);
      this.getCustomerHourArray.push(randomGenerate);

    }


  },

  avg_per_hour: function () {
    let avgResult = 1;

    for (let i = 0; i < time.length; i++) {
      avgResult = Math.floor(this.getCustomerHourArray[i] * this.avg);
      this.getCookiesHourArray.push(avgResult);
    }

  },

  render: function () {
    let pEl = document.createElement('p');
    div.appendChild(pEl);

    let ulEl = document.createElement('ul');
    div.appendChild(ulEl);


    pEl.textContent = this.location;

    for (let i = 0; i < time.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      if ((time.length - 1) === i) {
        liEl.textContent = `${time[i]} : ${this.total} cookies `;

      }
      else {

        liEl.textContent = `${time[i]} : ${this.getCookiesHourArray[i]} cookies `;
        this.total = this.total + this.getCookiesHourArray[i];
      }
    }


  }



};
dubai.customer_per_hour();
dubai.avg_per_hour();
dubai.render();



const paris = {
  location: 'Paris',
  the_Min_Hourly_Customers: 20,
  the_Max_Hourly_Customers: 38,
  avg: 2.3,
  getCustomerHourArray: [],
  getCookiesHourArray: [],
  total: 0,

  customer_per_hour: function () {

    let randomGenerate;
    for (let i = 0; i < time.length; i++) {
      randomGenerate = random(this.the_Max_Hourly_Customers, this.the_Min_Hourly_Customers);
      this.getCustomerHourArray.push(randomGenerate);

    }


  },

  avg_per_hour: function () {
    let avgResult = 1;

    for (let i = 0; i < time.length; i++) {
      avgResult = Math.floor(this.getCustomerHourArray[i] * this.avg);
      this.getCookiesHourArray.push(avgResult);
    }

  },

  render: function () {
    let pEl = document.createElement('p');
    div.appendChild(pEl);

    let ulEl = document.createElement('ul');
    div.appendChild(ulEl);


    pEl.textContent = this.location;

    for (let i = 0; i < time.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      if ((time.length - 1) === i) {
        liEl.textContent = `${time[i]} : ${this.total} cookies `;

      }
      else {

        liEl.textContent = `${time[i]} : ${this.getCookiesHourArray[i]} cookies `;
        this.total = this.total + this.getCookiesHourArray[i];
      }
    }


  }



};
paris.customer_per_hour();
paris.avg_per_hour();
paris.render();



const lima = {
  location: 'Lima',
  the_Min_Hourly_Customers: 2,
  the_Max_Hourly_Customers: 16,
  avg: 4.6,
  getCustomerHourArray: [],
  getCookiesHourArray: [],
  total: 0,

  customer_per_hour: function () {

    let randomGenerate;
    for (let i = 0; i < time.length; i++) {
      randomGenerate = random(this.the_Max_Hourly_Customers, this.the_Min_Hourly_Customers);
      this.getCustomerHourArray.push(randomGenerate);

    }


  },

  avg_per_hour: function () {
    let avgResult = 1;

    for (let i = 0; i < time.length; i++) {
      avgResult = Math.floor(this.getCustomerHourArray[i] * this.avg);
      this.getCookiesHourArray.push(avgResult);
    }

  },

  render: function () {
    let pEl = document.createElement('p');
    div.appendChild(pEl);

    let ulEl = document.createElement('ul');
    div.appendChild(ulEl);


    pEl.textContent = this.location;

    for (let i = 0; i < time.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      if ((time.length - 1) === i) {
        liEl.textContent = `${time[i]} : ${this.total} cookies `;

      }
      else {

        liEl.textContent = `${time[i]} : ${this.getCookiesHourArray[i]} cookies `;
        this.total = this.total + this.getCookiesHourArray[i];
      }
    }


  }



};
lima.customer_per_hour();
lima.avg_per_hour();
lima.render();
