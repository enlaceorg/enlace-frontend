import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-postagem',
  templateUrl: './postagem.component.html',
  styleUrls: ['./postagem.component.css']
})
export class PostagemComponent implements OnInit {

  usuario: Usuario = new Usuario()
  idUsuario = environment.usuarioId
  tema: Tema = new Tema()
  listaTema: Tema[]
  idTema: number
  postagem: Postagem = new Postagem()
  listaPostagem: Postagem[]



  constructor(public router: Router, private postagemService: PostagemService, private temaService: TemaService, private authService: AuthService) { }

  ngOnInit() {
    if (environment.token == '') {
      // alert('Sua seção expirou, faça o login novamente');
      this.router.navigate(['/entrar']);
    }
    this.authService.refreshToken();
    this.getAllPostagem();
    this.getAllTemas();
  }

  getAllTemas() {
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTema = resp
    })
  }

  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }

  getAllPostagem() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagem = resp
    })
  }

  findByIdUser() {
    this.authService.getByIdUsuario(this.idTema).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

  publicar(){
    this.tema.temaId=this.idTema
    this.postagem.tema=this.tema
    this.usuario.usuarioId=this.idUsuario
    this.postagem.usuario=this.usuario

    this.postagemService.postPostagem(this.postagem).subscribe((resp:Postagem)=>{
      this.postagem=resp
      alert("Postagem realizada com sucesso!")
      this.postagem = new Postagem()
    })
  }


  

}
