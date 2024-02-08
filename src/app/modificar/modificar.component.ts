import { Component } from '@angular/core';
import { Articulo } from '../Modelos/articulo';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticulosService } from '../Servicios/articulos.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent {

  articulo!: Articulo

  constructor(private router: Router, private rutaActiva: ActivatedRoute, private servicioArticulos: ArticulosService) { }
  
  id!: string
  nombre!: string
  descripcion !: string
  precio !: number

  ngOnInit() {
    this.articulo = this.servicioArticulos.getArticulo(this.rutaActiva.snapshot.params['id'])
    this.id = this.articulo.id
    this.nombre = this.articulo.nombre
    this.descripcion = this.articulo.descripcion
    this.precio = this.articulo.precio
  }

  modificar() {
    let articuloModificado: Articulo = {
      id: this.id,
      nombre: this.nombre,
      descripcion: this.descripcion,
      precio: this.precio
    }
    this.servicioArticulos.putArticulo(articuloModificado)
    this.router.navigate(["/ejemplo5"])
  }
}
