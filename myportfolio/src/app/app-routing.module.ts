import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
  ({path: "portfolio", component: PortfolioComponent}),
  ({path: "navbar", component: NavbarComponent})
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
