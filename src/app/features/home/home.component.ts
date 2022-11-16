import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getIceCreams } from 'src/app/+state/ice-cream.actions';
import { selectIceCreams } from 'src/app/+state/ice-cream.reducers';
import { IceCreamService } from '../../ice-cream.service';
import { IceCream, IceCreamType } from '../../models/icecream.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Ng Ice';
  iceCreams = this.store.select(selectIceCreams);

  readonly iceCreamType = IceCreamType;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
      this.store.dispatch(getIceCreams())
  }
}
