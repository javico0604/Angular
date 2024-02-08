import { Component } from '@angular/core';
import { Articulo } from '../Modelos/articulo';
import { ArticulosService } from '../Servicios/articulos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-articulo',
  templateUrl: './add-articulo.component.html',
  styleUrls: ['./add-articulo.component.css']
})
export class AddArticuloComponent {
  articulos!:Articulo[]

  constructor(private router:Router ,private servicioArticulos:ArticulosService){}

  ngOnInit(){
    this.articulos=this.servicioArticulos.getArticulos()
  }

    id !:string
    nombre!:string
    descripcion !:string
    precio !:number

    addArticulo(){
        let articulo:Articulo=
        { id:this.id,
          nombre:this.nombre,
          descripcion:this.descripcion,
          precio:this.precio
        }
        this.servicioArticulos.addArticulo(articulo)
        this.router.navigate(["/ejemplo5"])
      }
  }

