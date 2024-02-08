import { Component } from '@angular/core';
import { ServicioHttpService } from '../Servicios/servicio-http.service';
import { Cliente } from '../Modelos/cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  constructor(private servicioHTTP: ServicioHttpService, private router: Router) { }
  clientes!: Cliente[]
  mensaje!: string

  ngOnInit() {
    this.servicioHTTP.getClientes().subscribe(
      datos => this.clientes = datos,
      error => {
        console.log(error.status);
        
        if (error.status == 404) {
          console.log("hola");
          
          this.mensaje = "Error. NO existe"
        };
      })
  }
}
