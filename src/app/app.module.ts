import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IceCreamCardComponent } from './ice-cream-card/ice-cream-card.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    })
  ],
  declarations: [AppComponent, TitleComponent, NavbarComponent, IceCreamCardComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
