import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { AlertaService } from '../service/alerta.service';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-postagem-apagar',
  templateUrl: './postagem-apagar.component.html',
  styleUrls: ['./postagem-apagar.component.css']
})
export class PostagemApagarComponent implements OnInit {

  postagem: Postagem = new Postagem()
  idPost: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postagemService: PostagemService,
    private alertaService: AlertaService
  ) { }

  ngOnInit() {

    window.scroll(0,0)

    if (environment.token == ''){
      this.router.navigate(['/entrar'])
    }

    this.idPost = this.route.snapshot.params['id']
    this.findByIdPostagem(this.idPost)
  }

  findByIdPostagem(id: number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) => {
      this.postagem = resp
    })
  }

  apagar(){
    this.postagemService.deletePostagem(this.idPost).subscribe(()=>{
      this.alertaService.showAlertSuccess('Postagem apagada com sucesso!')
      this.router.navigate(['/inicio'])
    })
  }

}