import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonApiPageRoutingModule } from './pokemon-api-routing.module';

import { PokemonApiPage } from './pokemon-api.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonApiPageRoutingModule
  ],
  declarations: [PokemonApiPage]
})
export class PokemonApiPageModule {}
