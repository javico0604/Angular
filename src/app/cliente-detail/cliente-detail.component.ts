import { Component } from '@angular/core';
import { ServicioHttpService } from '../Servicios/servicio-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../Modelos/cliente';

@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent {
  constructor (private servicioHTTP:ServicioHttpService, private router:Router,private rutaActiva:ActivatedRoute) {}
  id!:number
  cliente: Cliente = {id: 0, nombre: "", cargo: ""}
  mensaje!: string

  ngOnInit(){
    this.id = this.rutaActiva.snapshot.params['id']
    this.servicioHTTP.getCliente(this.id).subscribe(datos => this.cliente = datos,
      error => {
        if (error.status == 404) {
          this.mensaje = "Error. NO existe"
        };
      })
  }

  borrar(id:number | undefined){
    this.servicioHTTP.deleteCliente(this.id).subscribe(datos => this.router.navigate(["/clientes"]),
    error => {
      if (error.status == 404) {
        console.log(error.status);
      };})
    this.router.navigate(["/clientes"])
  }
}
