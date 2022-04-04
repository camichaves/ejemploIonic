import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaAvisosPage } from './pagina-avisos.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaAvisosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaAvisosPageRoutingModule {}
