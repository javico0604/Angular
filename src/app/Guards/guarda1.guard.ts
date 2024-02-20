import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ArticulosService } from '../Servicios/articulos.service';

@Injectable({
  providedIn: 'root'
})
export class Guarda1Guard implements CanActivate {

  constructor(private router:Router, private servicio:ArticulosService){}

  password!:string | null

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
   while(this.password != "hola"){
    this.password = prompt("contraseña")
    if(this.password == null){
      break
    }
   }

   return this.password === "hola"
  }
}
