import { Component } from '@angular/core';
import { Articulo } from '../Modelos/articulo';
import { ArticulosService } from '../Servicios/articulos.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.component.html',
  styleUrls: ['./borrar.component.css']
})
export class BorrarComponent {
  articulo!:Articulo

  constructor(private router:Router ,private rutaActiva:ActivatedRoute, private servicioArticulos:ArticulosService){}

  ngOnInit(){
    this.articulo = this.servicioArticulos.getArticulo(this.rutaActiva.snapshot.params['id'])
  }

  borrar(){
    this.servicioArticulos.deleteArticulo(this.articulo.id)
    this.router.navigate(["/ejemplo5"])
  }
}
