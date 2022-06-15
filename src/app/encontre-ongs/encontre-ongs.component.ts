import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-encontre-ongs',
  templateUrl: './encontre-ongs.component.html',
  styleUrls: ['./encontre-ongs.component.css']
})
export class EncontreOngsComponent implements OnInit {

  usuarios: Usuario[]
  idUsuario: number

  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    if (environment.token == "") {
      this.router.navigate(['/entrar'])
    }

    this.encontrarTodosUsuarios()
  }

  encontrarTodosUsuarios() {
    this.authService.getTodosUsuarios().subscribe((resp: Usuario[]) => {
      this.usuarios = resp
    })
  }
}
