import { Component } from '@angular/core';
import { IceCreamService } from './ice-cream.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ng Ice';
  iceCreams: any[];

  constructor(private iceCreamService: IceCreamService) {
    this.iceCreamService.getIceCreams().subscribe(items => {
      this.iceCreams = items;
    });
  }
}
