import { Component, Input } from '@angular/core';
import { AppComponent} from 'src/app/app.component';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})


export class ContenidoComponent {

  // Error para obtener los datos de la imagen del componente hijo
  // @Input() cambioImagen!: String;
  // alert(cambioImagen);
  // imagen = this.cambioImagen;

  // declaramos una variable que almacene las imagenes a mostrar
  imagen = 'https://www.certus.edu.pe/wp-content/uploads/2018/11/certus-tu-nueva-vida-te-espera-3.jpg';
  
}
