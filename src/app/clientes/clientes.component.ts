import { Component, OnInit } from '@angular/core';
import { Client } from '../Modelos/client';
import { clientes } from '../Modelos/clients';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent{
  title:string = 'ang1';
  curso:string = '2º DAW 2023';
  miCliente:Client = {id: 1, name: "Pepe", city: "Valencia"};
  nombres:string[]=["Pepe", "Juan", "Ana", "Eva"];
  ciudades:Array<String> = ["Valencia", "Alicante", "Castellón"];
  clientes = clientes;
}
