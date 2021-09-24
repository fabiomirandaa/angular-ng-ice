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
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { IceCreamDetailComponent } from './ice-cream-detail/ice-cream-detail.component';
import { IceCreamTypeSectionComponent } from './ice-cream-type-section/ice-cream-type-section.component';
import { QuantityDescriptionPipe } from './price-description/quantity-description.pipe';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    })
  ],
  declarations: [AppComponent, TitleComponent, NavbarComponent, IceCreamCardComponent, FooterComponent, HomeComponent, IceCreamDetailComponent, IceCreamTypeSectionComponent, QuantityDescriptionPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
