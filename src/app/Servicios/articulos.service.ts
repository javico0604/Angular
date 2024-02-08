import { Injectable } from '@angular/core';
import { Articulo } from '../Modelos/articulo';
import { ARTICULOS } from '../Modelos/mock-articulos';
import { Usuario } from '../Modelos/usuario';
import { USUARIO } from '../Modelos/mock-usuario';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor() { }

  articulos:Articulo[]=ARTICULOS
  usuarios:Usuario[]=USUARIO

  getArticulos(){
    return this.articulos
  }

  getArticulo(id:string){
    let pos=this.articulos.findIndex(a=>a.id==id)
    return this.articulos[pos]
  }

  addArticulo(articulo:Articulo){
    this.articulos.push(articulo)
  }

  putArticulo(articulo:Articulo){
    let pos=this.articulos.findIndex(a=>a.id==articulo.id)
    this.articulos[pos]=articulo
  }

  deleteArticulo(id:string){
    let pos=this.articulos.findIndex(a=>a.id==id)
    this.articulos.splice(pos, 1)
  }

  filtrarArticulos(precio:number, orden:string){
    let articulosFiltrados = this.articulos.filter(a => a.precio >= precio)

    articulosFiltrados.sort((a,b) => a.precio - b.precio)

    if(orden == "asc"){
      return articulosFiltrados
    } else{
      return articulosFiltrados.reverse()
    }
  }

  acceder(nombre:string, password:string){

    let logeado!:boolean
    
    this.usuarios.forEach(u => {
        if(nombre == u.nombre && password == u.password){
          logeado = true
        }
        return
      }
    );
    
    return logeado;
  }
}
