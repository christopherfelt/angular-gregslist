import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Car } from '../models/Car';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class CarService {
  url: string = 'https://localhost:5001/api/cars';

  constructor(private http: HttpClient) {}

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.url);
  }

  addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.url, car, httpOptions);
  }

  deleteCar(car: Car) {
    const url = this.url + '/' + car.id;
    return this.http.delete<Car>(url, httpOptions);
  }
}
