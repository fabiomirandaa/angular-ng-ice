import { Component, Input, OnInit } from '@angular/core';
import { IceCreamType, IceCream } from 'src/app/models/icecream.interface';

@Component({
  selector: 'app-ice-cream-type-section',
  templateUrl: './ice-cream-type-section.component.html',
  styleUrls: ['./ice-cream-type-section.component.scss']
})
export class IceCreamTypeSectionComponent implements OnInit {

  readonly iceCreamType = IceCreamType;
  @Input() title: string;
  @Input() iceCreams: IceCream[] | null;
  @Input() type: IceCreamType;

  ngOnInit(): void {
  }

}
