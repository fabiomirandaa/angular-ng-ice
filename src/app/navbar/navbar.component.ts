import { IceCream } from './../models/icecream';
import { IceCreamService } from './../ice-cream.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  searchTerm: string;
  @Input() searchPlaceholder: string = 'Pesquisar Sorvete';

  constructor(
    private iceCreamService: IceCreamService,
    private router: Router
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
