import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NuevaofertaComponent } from './nuevaoferta/nuevaoferta.component';
import { OfertaComponent } from './oferta/oferta.component';
import { OfertasComponent } from './ofertas/ofertas.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  }, 
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'nuevaoferta',
    component: NuevaofertaComponent
  },
  {
    path: 'oferta/:id',
    component: OfertaComponent
  },
  {
    path: 'ofertas',
    component: OfertasComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
