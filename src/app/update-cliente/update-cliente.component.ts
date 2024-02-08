import { Component } from '@angular/core';
import { Cliente } from '../Modelos/cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioHttpService } from '../Servicios/servicio-http.service';

@Component({
  selector: 'app-update-cliente',
  templateUrl: './update-cliente.component.html',
  styleUrls: ['./update-cliente.component.css']
})
export class UpdateClienteComponent {

  cliente: Cliente = {id: 0, nombre: "", cargo: ""}

  constructor(private router:Router, private servicioHTTP:ServicioHttpService, private rutaActiva: ActivatedRoute){}
  
  id!:number | undefined
  nombre!:string
  cargo!:string

  ngOnInit(){
    this.id = this.rutaActiva.snapshot.params['id']
    this.servicioHTTP.getCliente(this.id).subscribe(datos=>this.cliente = datos)     
  }
  
  updateCliente(){
    let clienteActualizado: Cliente = {
      id: this.cliente.id,
      nombre: this.cliente.nombre,
      cargo: this.cliente.cargo
    }
    this.servicioHTTP.putCliente(clienteActualizado.id ,clienteActualizado).subscribe(datos => this.router.navigate(["/clientes"]),
      error => {
        if (error.status == 404) {
          console.log(error.status);
        };}
        )
  
  }
}
