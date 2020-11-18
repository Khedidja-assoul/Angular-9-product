import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProduitComponent } from './produit/produit.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'home' , component: HomeComponent},
  {path:'produit' , component: ProduitComponent},
  {path:'contact' , component: ContactComponent},
  {path: '' , redirectTo: '/home' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
