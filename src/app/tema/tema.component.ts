import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number
  temaSelecionado: Tema = new Tema()
  editarTema: Tema = new Tema()


  constructor(
private router: Router,
private temaService: TemaService,
private route: ActivatedRoute
  ) { }
  

  ngOnInit() {
    if (environment.token == ""){
      this.router.navigate(['/entrar'])
    }

    console.log(environment.token)

    this.findAllTemas()
    this.idTema = this.route.snapshot.params['temaId']
    this.findByIdTemas(this.idTema)
  }

  findAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[] ) =>{
      this.listaTemas = resp
    })
  }

  findByIdTemas(idTema: number){
    this.temaService.getByIdTema(idTema).subscribe((resp: Tema) =>{
      this.tema = resp
    })
  }

  cadastrarTema(){
 this.temaService.postTema(this.tema).subscribe((resp: Tema)=> {
      this.tema = resp
      alert("Tema cadastrado com sucesso")
      this.findAllTemas()
      this.tema = new Tema()
    }) 
  }

  apagarSelecionado(){
    this.temaService.deleteTema(this.temaSelecionado.temaId).subscribe(() =>{
      alert('Tema apagado com sucesso')
      this.router.navigate(['/tema'])
      this.findAllTemas()
    })
  }

  editarSelecionado(){
    this.temaService.putTema(this.temaSelecionado).subscribe((resp: Tema)=>{
      this.tema = resp
      alert('Tema atualizado com sucesso')
      this.router.navigate(['/tema'])
      this.findAllTemas()
    })
  }

 selecionarTema(tema: Tema){
   this.temaSelecionado.descricao = tema.descricao
   this.temaSelecionado.tag = tema.tag
   this.temaSelecionado.temaId = tema.temaId
 }

}
