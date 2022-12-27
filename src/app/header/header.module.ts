import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuNavComponent } from './menu-nav/menu-nav.component';



@NgModule({
  declarations: [
    MenuNavComponent
  ],
  imports: [
    CommonModule
  ],
  // exportamos los componentes
  exports: [
    MenuNavComponent
  ]
})
export class HeaderModule { }
