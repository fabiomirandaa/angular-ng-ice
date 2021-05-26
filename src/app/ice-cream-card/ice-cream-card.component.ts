import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ice-cream-card',
  templateUrl: './ice-cream-card.component.html',
  styleUrls: ['./ice-cream-card.component.css']
})
export class IceCreamCardComponent implements OnInit {
  @Input() title: string; 
  @Input() description: string;
  @Input() imageSrc: string;

  constructor() { }

  ngOnInit() {
  }

}