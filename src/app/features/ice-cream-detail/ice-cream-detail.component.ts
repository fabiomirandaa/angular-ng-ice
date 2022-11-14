import { IceCream } from '../../models/icecream';
import { IceCreamService } from '../../ice-cream.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ice-cream-detail',
  templateUrl: './ice-cream-detail.component.html',
  styleUrls: ['./ice-cream-detail.component.scss']
})
export class IceCreamDetailComponent implements OnInit {
  icecream: IceCream;

  constructor(
    private iceCreamService: IceCreamService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const icecreamId = this.activatedRoute.snapshot.params.id;
    this.iceCreamService.getIceCreamById(icecreamId)
      .subscribe((icecream) => {
        this.icecream = icecream;
    });
  }
}
