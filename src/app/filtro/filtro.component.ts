import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from '../Modelos/articulo';
import { ARTICULOS } from '../Modelos/mock-articulos';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent {
  orden!:string
  precio!:number
  
  constructor(private router:Router){}

  ver(){
    this.router.navigate(["/articulosFiltrados"],
    {queryParams:{orden:this.orden, precio:this.precio}})
  }
}
