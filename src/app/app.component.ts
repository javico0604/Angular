import { Component } from '@angular/core';
import { Client } from './client';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'ang1';
  curso:string = '2º DAW 2023';
  miCliente:Client = {id: 1, name: "Pepe", ciudad: "Valencia"}
}
