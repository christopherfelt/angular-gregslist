import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { House } from '../models/house';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class HouseService {
  url: string = 'https://localhost:5001/api/houses';

  constructor(private http: HttpClient) {}

  getHouses(): Observable<House[]> {
    return this.http.get<House[]>(this.url);
  }
  addHouse(house: House): Observable<House> {
    return this.http.post<House>(this.url, house, httpOptions);
  }
  deleteHouse(house: House) {
    const url = this.url + '/' + house.id;
    return this.http.delete<House>(url, httpOptions);
  }
}
