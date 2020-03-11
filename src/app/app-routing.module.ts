import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { FormularioComponent } from './formulario/formulario.component';
import { TablaComponent } from './tabla/tabla.component';


const routes: Routes = [
  { path: 'cards', component: CardsComponent},
  { path: 'formulario', component: FormularioComponent},
  { path: 'tabla', component: TablaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
