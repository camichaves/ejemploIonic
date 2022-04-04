import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaAvisosPageRoutingModule } from './pagina-avisos-routing.module';

import { PaginaAvisosPage } from './pagina-avisos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaAvisosPageRoutingModule
  ],
  declarations: [PaginaAvisosPage]
})
export class PaginaAvisosPageModule {}
