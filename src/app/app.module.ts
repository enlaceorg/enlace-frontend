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
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { ContatoComponent } from './contato/contato.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MinhaspostagensComponent } from './minhaspostagens/minhaspostagens.component';
import { BotaoAcoesComponent } from './botao-acoes/botao-acoes.component';
import { PostagemComponent } from './postagem/postagem.component';
import { PostagemEditarComponent } from './postagem-editar/postagem-editar.component';
import { PostagemApagarComponent } from './postagem-apagar/postagem-apagar.component';
import { NavbarLogadoComponent } from './navbar-logado/navbar-logado.component';
import { TemaComponent } from './tema/tema.component';
import { EncontreOngsComponent } from './encontre-ongs/encontre-ongs.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastrarComponent,
    InicioComponent,
    NavbarComponent,
    SobreNosComponent,
    ComoFuncionaComponent,
    ContatoComponent,
    LandingPageComponent,
    MinhaspostagensComponent,
    BotaoAcoesComponent,
    PostagemComponent,
    PostagemEditarComponent,
    PostagemApagarComponent,
    NavbarLogadoComponent,
    TemaComponent,
    EncontreOngsComponent
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
