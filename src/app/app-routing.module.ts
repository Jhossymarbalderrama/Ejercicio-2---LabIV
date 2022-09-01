import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Componentes/login/login.component';
import { BienvenidoComponent } from './Componentes/bienvenido/bienvenido.component';
import { ErrorComponent } from './Componentes/error/error.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },

  { 
    path: 'login', component: LoginComponent 
  },

  { 
    path: 'bienvenido', component: BienvenidoComponent 
  },

  { 
    path: 'error', component: ErrorComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
