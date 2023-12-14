import { Component } from '@angular/core';
import { Articulo } from '../Modelos/articulo';
import { ARTICULOS } from '../Modelos/articulos';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent {
 articulos:Array<Articulo> = ARTICULOS 
articulo:Articulo=this.articulos[3]
botonActivo:boolean=true



constructor(){
  console.log("Constructor...")
}
ngOnInit(){
  console.log("ngOnInit...")
  setTimeout(() => {alert("Activo boton...");
                    this.botonActivo=false},5000);
}

activar(){
  this.botonActivo = false
}

desactivar(){
  this.botonActivo = true
}

}


