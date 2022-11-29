import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonApiPage } from './pokemon-api.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonApiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonApiPageRoutingModule {}
