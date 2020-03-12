import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { FormularioComponent } from './formulario/formulario.component';
import { TablaComponent } from './tabla/tabla.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { ConsignarComponent } from './consignar/consignar.component';
import { RetirarComponent } from './retirar/retirar.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'consultar', component: ConsultarComponent},
  { path: 'consignar', component: ConsignarComponent},
  { path: 'retirar', component: RetirarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
