import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { House } from '../../models/house';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css'],
})
export class HouseComponent implements OnInit {
  @Input() house: House;
  @Output() deleteHouse: EventEmitter<House> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDelete(house) {
    this.deleteHouse.emit(house);
  }
}
