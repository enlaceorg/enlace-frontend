import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-navbar-logado',
  templateUrl: './navbar-logado.component.html',
  styleUrls: ['./navbar-logado.component.css']
})
export class NavbarLogadoComponent implements OnInit {
  nome = environment.nome
  foto = environment.imagemUrl != "" ? 'https://i.pinimg.com/originals/78/2a/96/782a9625ef88b770e4639ca75e39341e.jpg' : environment.imagemUrl

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  sair() {
    this.router.navigate(['/entrar'])
    environment.usuarioEmail = ''
    environment.nome = ''
    environment.token = ''
    environment.imagemUrl = ''
    environment.usuarioId = 0
  }
}
