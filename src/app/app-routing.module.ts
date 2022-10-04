import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { IceCreamDetailComponent } from "./pages/ice-cream-detail/ice-cream-detail.component";

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'ice-cream/:id', component: IceCreamDetailComponent },
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
