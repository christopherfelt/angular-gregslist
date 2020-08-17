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
  itemType: string = 'house';

  constructor(private houseService: HouseService) {}

  ngOnInit(): void {
    this.houseService.getHouses().subscribe((house) => {
      this.houses = house;
    });
  }

  addHouse(house: House) {
    this.houseService.addHouse(house).subscribe((house) => {
      this.houses.push(house);
    });
  }

  deleteHouse(house: House) {
    this.houses = this.houses.filter((h) => h.id !== house.id);
    this.houseService.deleteHouse(house).subscribe();
  }
}
