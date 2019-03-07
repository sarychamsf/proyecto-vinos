import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerificacionComponent } from './verificacion/verificacion.component';
import { RegistroLotesComponent } from './registro-lotes/registro-lotes.component';
<<<<<<< HEAD
import {MayoristasMinoristasComponent} from './mayoristas-minoristas/mayoristas-minoristas.component';
import {ProduccionVinoComponent} from './produccion-vino/produccion-vino.component';
import {RecepcionUvasComponent} from './recepcion-uvas/recepcion-uvas.component';
import {RecepcionUvasBodegaComponent} from './recepcion-uvas-bodega/recepcion-uvas-bodega.component';

const routes: Routes = [
  {path: 'verificacion', component: VerificacionComponent},
  {path:'registro-lotes', component: RegistroLotesComponent},
  {path:'mayoristas-minoristas', component: MayoristasMinoristasComponent},
  {path:'produccion-vino', component: ProduccionVinoComponent},
  {path:'recepcion-uvas', component: RecepcionUvasComponent},
  {path:'recepcion-uvas-bodega', component: RecepcionUvasBodegaComponent}

=======
import { NuevoRegistroComponent } from './embotellador/nuevo-registro/nuevo-registro.component';
import { NuevoRegistroSecosComponent } from './embotellador/nuevo-registro-secos/nuevo-registro-secos.component';

const routes: Routes = [
  {path: 'verificacion', component: VerificacionComponent},
  {path: 'registro-lotes', component: RegistroLotesComponent},
  {path: 'embotellador/nuevo-registro-vino', component: NuevoRegistroComponent},
  {path: 'embotellador/nuevo-registro-secos', component: NuevoRegistroSecosComponent}
>>>>>>> 86117bce0ac2582cc302ea4c9dc6086e9c379ee0
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
