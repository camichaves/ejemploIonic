import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';
import { ContactoComponent } from '../contacto/contacto.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ExploreContainerComponent, ContactoComponent],
  exports: [ExploreContainerComponent]
})
export class ExploreContainerComponentModule {}
