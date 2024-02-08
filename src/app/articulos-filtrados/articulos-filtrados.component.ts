import { Component, Injectable } from '@angular/core';
import { Articulo } from '../Modelos/articulo';
import { ARTICULOS } from '../Modelos/mock-articulos';
import { ActivatedRoute } from '@angular/router';
import { ArticulosService } from '../Servicios/articulos.service';

@Component({
  selector: 'app-articulos-filtrados',
  templateUrl: './articulos-filtrados.component.html',
  styleUrls: ['./articulos-filtrados.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class ArticulosFiltradosComponent {
  constructor(private ruta:ActivatedRoute,
              private servicioArticulos:ArticulosService){}

  ngOnInit(){
    let precio:number
    let orden:string
    this.ruta.queryParams.subscribe(params => {precio = params["precio"]; 
    orden=params["orden"]; 
    this.articulos = this.servicioArticulos.filtrarArticulos(precio, orden)});
    
  }
  articulos!:Articulo[]
  
}
