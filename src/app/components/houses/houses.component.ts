import { Component, OnInit } from '@angular/core';

import { HouseService } from '../../services/house.service';
import { House } from '../../models/house';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css'],
})
export class HousesComponent implements OnInit {
  houses: House[];

  constructor(private houseService: HouseService) {}

  ngOnInit(): void {
    this.houseService.getHouses().subscribe((house) => {
      this.houses = house;
    });
  }
}
