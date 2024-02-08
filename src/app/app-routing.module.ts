import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndiceComponent } from './indice/indice.component';
import { Ejemplo1Component } from './ejemplo1/ejemplo1.component';
import { Ejemplo3v1Component } from './ejemplo3v1/ejemplo3v1.component';
import { Ejemplo3Component } from './ejemplo3/ejemplo3.component';
import { Ejemplo2Component } from './ejemplo2/ejemplo2.component';
import { Ejemplo4Component } from './ejemplo4/ejemplo4.component';
import { Ejemplo4v2Component } from './ejemplo4v2/ejemplo4v2.component';
import { Ejemplo4v4Component } from './ejemplo4v4/ejemplo4v4.component';
import { Ejemplo5Component } from './ejemplo5/ejemplo5.component';
import { InicioComponent } from './inicio/inicio.component';
import { AddArticuloComponent } from './add-articulo/add-articulo.component';
import { BorrarComponent } from './borrar/borrar.component';
import { ModificarComponent } from './modificar/modificar.component';
import { FiltroComponent } from './filtro/filtro.component';
import { ArticulosFiltradosComponent } from './articulos-filtrados/articulos-filtrados.component';
import { ClientesComponent } from './clientes/clientes.component';
import { Guarda1Guard } from './Guards/guarda1.guard';
import { ErrorComponent } from './error/error.component';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import { AddClienteComponent } from './add-cliente/add-cliente.component';
import { UpdateClienteComponent } from './update-cliente/update-cliente.component';

const routes: Routes = [
  { path: '', component:  InicioComponent},
  { path: 'indice', component: IndiceComponent },
  { path: 'ejemplo1', component: Ejemplo1Component },
  { path: 'ejemplo2', component: Ejemplo2Component },
  { path: 'ejemplo3', component: Ejemplo3Component },
  { path: 'ejemplo3v1', component: Ejemplo3v1Component },
  { path: 'ejemplo4', component: Ejemplo4Component },
  { path: 'ejemplo4v2', component: Ejemplo4v2Component },
  { path: 'ejemplo4v4', component: Ejemplo4v4Component },
  { path: 'ejemplo5', component: Ejemplo5Component },
  { path: 'addArticulo', component: AddArticuloComponent},
  { path: 'borrar/:id', component: BorrarComponent },
  { path: 'modificar/:id', component: ModificarComponent},
  { path: 'filtro', component: FiltroComponent},
  { path: 'articulosFiltrados', component:ArticulosFiltradosComponent},
  { path: 'clientes', canActivate:[Guarda1Guard] ,component: ClientesComponent},
  { path: 'addClientes', canActivate:[Guarda1Guard] ,component: AddClienteComponent},
  { path: 'updateClientes/:id', canActivate:[Guarda1Guard] ,component: UpdateClienteComponent},
  { path: 'clientes/:id', canActivate:[Guarda1Guard] ,component:ClienteDetailComponent},
  { path: '**' , component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
