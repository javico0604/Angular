import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioHttpService } from '../Servicios/servicio-http.service';
import { Cliente } from '../Modelos/cliente';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent {
  constructor(private router: Router, private servicioHTTP: ServicioHttpService) { }

  cliente:Cliente= {nombre: "", cargo: ""}

  addCliente() {

    this.servicioHTTP.postCiente(this.cliente).subscribe(datos => this.router.navigate(["/clientes"]),
      error => {
        if (error.status == 404) {
          console.log(error.status);
        };
      })
  }
}
