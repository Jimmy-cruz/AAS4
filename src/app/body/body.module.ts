import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenidoComponent } from './contenido/contenido.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';



@NgModule({
  declarations: [
    ContenidoComponent,
    BarraLateralComponent
  ],
  imports: [
    CommonModule
  ],
  // Exportamos los componentes
  exports: [
    ContenidoComponent,
    BarraLateralComponent
  ]
})
export class BodyModule { }
