import { Component } from '@angular/core';
import { IceCreamService } from '../../ice-cream.service';
import { IceCream, IceCreamType } from '../../models/icecream';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  title = 'Ng Ice';
  iceCreams: IceCream[];

  readonly iceCreamType = IceCreamType;

  constructor(private iceCreamService: IceCreamService) {
    this.iceCreamService.getIceCreams().subscribe(items => {
      this.iceCreams = items;
      console.log(this.iceCreams);
    });
  }
}
