import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ArticulosService } from '../Servicios/articulos.service';

@Injectable({
  providedIn: 'root'
})
export class Guarda1Guard implements CanActivate {

  constructor(private router:Router, private servicio:ArticulosService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    let nombre = 'Paco'
    let password = 'Paco123'
    
    if(this.servicio.acceder(nombre, password)){
      return true;
    }else{
      this.router.navigate(["/"])
      return false;
    }
  }
  
}
