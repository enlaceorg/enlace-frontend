import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BotaoAcoesComponent } from './botao-acoes/botao-acoes.component';
import { PostagemComponent } from './postagem/postagem.component';
import { PostagemEditarComponent } from './postagem-editar/postagem-editar.component';
import { PostagemApagarComponent } from './postagem-apagar/postagem-apagar.component';
import { NavbarLogadoComponent } from './navbar-logado/navbar-logado.component';
import { TemaComponent } from './tema/tema.component';
import { TemaEditarComponent } from './tema-editar/tema-editar.component';
import { TemaApagarComponent } from './tema-apagar/tema-apagar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastrarComponent,
    InicioComponent,
    NavbarComponent,
    BotaoAcoesComponent,
    PostagemComponent,
    PostagemEditarComponent,
    PostagemApagarComponent,
    NavbarLogadoComponent,
    TemaComponent,
    TemaEditarComponent,
    TemaApagarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    // {
    //   provide: LocationStrategy,
    //   useClass: HashLocationStrategy
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
