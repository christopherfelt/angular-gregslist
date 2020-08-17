import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent implements OnInit {
  @Input() ItemType: string;
  @Output() addItem: EventEmitter<any> = new EventEmitter();

  title: string;
  description: string;
  price: string;
  imgurl: string;
  location: string;
  rate: string;
  hours: string;

  isJob: boolean;
  isHouse: boolean;
  isCar: boolean;

  constructor() {}

  ngOnInit(): void {
    this.isJob = this.ItemType == 'job';
    this.isHouse = this.ItemType == 'house';
    this.isCar = this.ItemType == 'car';
  }

  onSubmit() {
    let item: any = {};
    console.log('submit');
    if (this.ItemType === 'car') {
      item = {
        title: this.title,
        description: this.description,
        price: parseFloat(this.price),
        imgUrl: this.imgurl,
      };
    } else if (this.ItemType === 'house') {
      item = {
        title: this.title,
        description: this.description,
        price: parseFloat(this.price),
        location: this.location,
        imgUrl: this.imgurl,
      };
    } else {
      item = {
        title: this.title,
        description: this.description,
        hours: parseInt(this.hours),
        rate: parseFloat(this.rate),
        imgUrl: this.imgurl,
      };
    }

    this.addItem.emit(item);
  }
}
