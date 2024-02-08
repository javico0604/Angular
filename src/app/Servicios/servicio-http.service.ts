import { Injectable } from '@angular/core';
import { Cliente } from '../Modelos/cliente';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServicioHttpService {

  constructor(private miHTTP:HttpClient) { }

  url:string = "http://localhost:3000/clientes"

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Error de conexión:', error.error);
    } else {
      console.error(`Backend error codigo ${error.status}, mensaje: `, error.statusText);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  getClientes():Observable<Cliente[]>{
    return this.miHTTP.get<Cliente[]>(this.url)
  }

  getCliente(id:number | undefined):Observable<Cliente>{
    return this.miHTTP.get<Cliente>(this.url+ "/"+id)
  }

  postCiente(cliente:Cliente):Observable<Cliente>{
    return this.miHTTP.post<Cliente>(this.url,cliente)
  }

  putCliente(id:number | undefined, cliente:Cliente):Observable<Cliente>{
    return this.miHTTP.put<Cliente>(this.url+ "/"+id, cliente)
  }

  deleteCliente(id:number):Observable<Cliente>{
    return this.miHTTP.delete<Cliente>(this.url+ "/"+id)
  }
}
