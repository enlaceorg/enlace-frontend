import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PostagemComponent } from './postagem/postagem.component';
import { MinhaspostagensComponent } from './minhaspostagens/minhaspostagens.component';
import { EncontreOngsComponent } from './encontre-ongs/encontre-ongs.component';
import { PostagemEditarComponent } from './postagem-editar/postagem-editar.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [

  {path:"", redirectTo:"inicio", pathMatch:"full"},
  {path:"entrar", component: LoginComponent},
  {path:"cadastrar", component: CadastrarComponent},
  {path:"postagem", component:PostagemComponent },
  {path: "tema", component: TemaComponent},
  {path:"inicio", component: LandingPageComponent},
  {path:"minhaspostagens", component: MinhaspostagensComponent},
  {path:"encontreongs", component: EncontreOngsComponent},
  {path:"minhaspostagens/apagar/:id", component: MinhaspostagensComponent},
  {path:"minhaspostagens/editar/:id", component: PostagemEditarComponent},
  {path: "rodape", component: FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
