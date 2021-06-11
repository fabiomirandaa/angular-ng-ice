import { Component, Input, OnInit } from '@angular/core';
import { IceCream } from '../models/icecream';

@Component({
  selector: 'app-ice-cream-card',
  templateUrl: './ice-cream-card.component.html',
  styleUrls: ['./ice-cream-card.component.css']
})
export class IceCreamCardComponent implements OnInit {
  @Input() iceCream: IceCream;

  constructor() { }

  ngOnInit() {
  }

}