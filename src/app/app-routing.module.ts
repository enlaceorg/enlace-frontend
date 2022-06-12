import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PostagemComponent } from './postagem/postagem.component';

const routes: Routes = [

  {path:"", redirectTo:"inicio", pathMatch:"full"},
  {path:"inicio", component: InicioComponent},
  {path:"entrar", component: LoginComponent},
  {path:"cadastrar", component: CadastrarComponent},
  {path:"inicio", component: LandingPageComponent},
  {path:"postagem", component:PostagemComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
