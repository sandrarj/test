import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoricoComponent } from './historico/historico.component';
import { TemperaturaComponent } from './temperatura/temperatura.component';


const routes: Routes = [
   { path: '',redirectTo:'/home',pathMatch: 'full'},
   { path: 'home',component: TemperaturaComponent },
   { path: 'historico/:id',component: HistoricoComponent }
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}