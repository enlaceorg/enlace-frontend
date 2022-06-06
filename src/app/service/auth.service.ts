import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
    public http: HttpClient
  ) { }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post <UsuarioLogin> ('https://enlaceorg.herokuapp.com/usuarios/login', usuarioLogin)
  }

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post <Usuario> ('https://enlaceorg.herokuapp.com/usuarios/cadastro', usuario)
  }

  logado(){
    
  }
}
