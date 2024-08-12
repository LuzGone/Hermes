import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterOutlet } from '@angular/router';

import { PedidosComponent } from './pedidos/pedidos/pedidos.component';
import { MotoristasComponent } from './motoristas/motoristas/motoristas.component';
import { VeiculosComponent } from './veiculos/veiculos/veiculos.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pedidos'


  },
  {
    path:'pedidos',
    component: PedidosComponent
  },
  {
    path:'motoristas',
    component:MotoristasComponent
  },
  {
    path:'veiculos',
    component:VeiculosComponent
  }


];

