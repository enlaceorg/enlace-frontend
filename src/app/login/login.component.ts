import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)

  }

  entrar() {
    this.authService.entrar(this.usuarioLogin).subscribe((resp: UsuarioLogin)=>{
      this.usuarioLogin = resp

      environment.usuarioId = this.usuarioLogin.usuarioId
      environment.nome = this.usuarioLogin.nome
      environment.usuarioEmail = this.usuarioLogin.usuarioEmail
      environment.imagemUrl = this.usuarioLogin.imagemUrl
      environment.token = this.usuarioLogin.token

      this.router.navigate(['/postagem'])
    }, err =>{
      if(err.status == 500 || err.status == 401) {
        alert("Usuário não encontrado ou senha incorreta")
      }
    })
  }

}
