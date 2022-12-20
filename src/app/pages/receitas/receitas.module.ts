import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReceitasPageRoutingModule } from './receitas-routing.module';

import { ReceitasPage } from './receitas.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceitasPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ReceitasPage]
})
export class ReceitasPageModule {}
