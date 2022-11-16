import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addIceCream } from 'src/app/+state/ice-cream.actions';
import { IceCream } from 'src/app/models/icecream.interface';


@Component({
  selector: 'app-ice-cream-card',
  templateUrl: './ice-cream-card.component.html',
  styleUrls: ['./ice-cream-card.component.css']
})
export class IceCreamCardComponent implements OnInit {
  @Input() iceCream: IceCream;

  constructor(private store: Store) { }

  ngOnInit() {
  }

  addInCart(iceCream: IceCream) {
    this.store.dispatch(addIceCream({iceCream}))
  }

}
