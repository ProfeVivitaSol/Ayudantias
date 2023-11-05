import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUsuario, IUsuarios } from '../pages/interfaces/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioserviceService {

  constructor(private httpclient: HttpClient) { }

  //implementamos médodo post
  CrearUsuario(newUsuario: IUsuario): Observable<IUsuario>{
    return this.httpclient.post<IUsuarios>(`${environment.apiUrl}/usuarios`, newUsuario);
  }


  
}
