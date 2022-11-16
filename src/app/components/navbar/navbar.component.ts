import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { selectIceCreamsCartCount } from "src/app/+state/ice-cream.reducers";
import { IceCreamService } from "src/app/ice-cream.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  searchTerm: string;
  countCart$ = this.store.select(selectIceCreamsCartCount);
  @Input() searchPlaceholder: string = 'Pesquisar Sorvete';

  constructor(
    private iceCreamService: IceCreamService,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit() {}

  search() {
    this.iceCreamService
      .getIceCreamByTerm(this.searchTerm)
      .subscribe((items) => {
        // TODO: Implementar cenário de redirect para 404
        const id = items[0]?.id;
        this.router.navigate(['/ice-cream/'+ id]);
      });
  }
}
