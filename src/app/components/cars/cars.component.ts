import { Component, OnInit } from '@angular/core';

import { Car } from '../../models/car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {
  cars: Car[];

  constructor() {}

  ngOnInit(): void {
    this.cars = [
      {
        id: 1,
        title: 'car one',
        description: 'a new fancy car',
        price: 12.34,
        imgUrl: '//placehold.it/200x200',
      },
      {
        id: 2,
        title: 'car two',
        description: 'an older car',
        price: 100.0,
        imgUrl: '//placehold.it/200x200',
      },
      {
        id: 3,
        title: 'car three',
        description: 'a new fancy car',
        price: 1112.0,
        imgUrl: '//placehold.it/200x200',
      },
    ];
  }
}
