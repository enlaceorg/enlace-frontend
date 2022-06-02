import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [

  {path:"", redirectTo:"inicio", pathMatch:"full"},
  {path:"login", component: LoginComponent},
  {path:"cadastrar", component: CadastrarComponent},
  {path:"inicio", component: InicioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
