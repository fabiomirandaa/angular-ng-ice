import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CheckoutComponent } from './features/checkout/checkout.component';
import { HomeComponent } from "./features/home/home.component";
import { IceCreamDetailComponent } from "./features/ice-cream-detail/ice-cream-detail.component";

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'ice-cream/:id', component: IceCreamDetailComponent },
    { path: 'checkout', component: CheckoutComponent },
    // TODO: Criar a rota para 404
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
