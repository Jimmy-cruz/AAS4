import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.css']
})


export class BarraLateralComponent {

  // declaramos la variable hija que sera enviada (se presenta errores en este punto)
  @Input() imagenHijo: String = "";
  @Output() cambioImagen = new EventEmitter<string>();
  // imagenHijo = '';

  bt(){
    // this.imagenHijo = "https://repository-images.githubusercontent.com/2126244/e4760ecf-91fe-4225-b714-4672676f8b92";
    this.cambioImagen.emit("https://repository-images.githubusercontent.com/2126244/e4760ecf-91fe-4225-b714-4672676f8b92");
  }

  nj(){
    this.imagenHijo = 'https://www.section.io/engineering-education/history-of-nodejs/nodejs-use-cases-cover-image.png';
    // this.cambioImagen.emit(this.imagenHijo);
  }

  ag(){
    this.imagenHijo = 'https://d33wubrfki0l68.cloudfront.net/e7701cec5df7c86a6f7773f56afede3819b8d136/ceb4d/assets/images/notes/angular-intro/que-es-angular.jpg';
    // this.cambioImagen.emit(this.imagenHijo);
  }

  gh(){
    this.imagenHijo = 'https://edteam-media.s3.amazonaws.com/infographics/original/90ac0147-1802-44fb-8043-b9ab20a8fa32.png';
    // this.cambioImagen.emit(this.imagenHijo);
  }

}
