import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./components/footer/footer.component";
import { IceCreamCardComponent } from "./components/ice-cream-card/ice-cream-card.component";
import { IceCreamTypeSectionComponent } from "./components/ice-cream-type-section/ice-cream-type-section.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { QuantityDescriptionPipe } from "./components/price-description/quantity-description.pipe";
import { TitleComponent } from "./components/title/title.component";
import { InMemoryDataService } from "./in-memory-data.service";
import { CheckoutComponent } from './features/checkout/checkout.component';
import { HomeComponent } from "./features/home/home.component";
import { IceCreamDetailComponent } from "./features/ice-cream-detail/ice-cream-detail.component";


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
  declarations: [
    AppComponent,
    TitleComponent,
    NavbarComponent,
    IceCreamCardComponent,
    FooterComponent,
    HomeComponent,
    IceCreamDetailComponent,
    IceCreamTypeSectionComponent,
    QuantityDescriptionPipe,
    CheckoutComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
