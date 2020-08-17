import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';

import { Car } from '../../models/car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {
  cars: Car[];
  itemType: string = 'car';

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.carService.getCars().subscribe((car) => {
      this.cars = car;
    });
  }

  addCar(car: Car) {
    this.carService.addCar(car).subscribe((car) => {
      this.cars.push(car);
    });
  }

  deleteCar(car: Car) {
    this.cars = this.cars.filter((c) => c.id !== car.id);
    this.carService.deleteCar(car).subscribe();
  }
}
