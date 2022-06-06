import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario;
  senhaConfirmada: string;
  usuarioSelecionado: string;


  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0);
  }

  confirmarSenha(event: any){
      this.senhaConfirmada = event.target.value;
  }

  selecionarTipoUsuario(event: any){
    this.usuarioSelecionado = event.target.value;
  }



  cadastrar(){
    this.usuario.tipo = this.usuarioSelecionado;
    if(this.usuario.senha != this.senhaConfirmada) {
      alert('Você digitou senhas diferentes, verifique...');
    } else {
      this.auth.cadastrar(this.usuario).subscribe((resp: Usuario) =>{
        this.usuario = resp

        this.router.navigate(['/entrar'])
        alert('Usuário cadastrado com sucesso!')
      })
    }
}
}
