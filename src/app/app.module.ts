import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListaCarneComponent } from './pages/lista-carne/lista-carne.component';
import { LandingComponent } from './pages/landing/landing.component';
import { CadastroProdComponent } from './components/listaCarne/cadastro-prod/cadastro-prod.component';
import { EdicaoProdComponent } from './components/listaCarne/edicao-prod/edicao-prod.component';
import { CompraProdComponent } from './components/listaCarne/compra-prod/compra-prod.component';
import { ListaPedidoComponent } from './components/listaCarne/lista-pedido/lista-pedido.component';
import { LoginComponent } from './pages/loginCad/login/login.component';
import { CadastroComponent } from './pages/loginCad/cadastro/cadastro.component';
import { CadErrorComponent } from './error/loginCad/cadastro/cad-error/cad-error.component';
import { DiffSenhaComponent } from './error/loginCad/cadastro/diff-senha/diff-senha.component';
import { NotFoundComponent } from './error/loginCad/login/not-found/not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    ListaCarneComponent,
    LandingComponent,
    CadastroProdComponent,
    EdicaoProdComponent,
    CompraProdComponent,
    ListaPedidoComponent,
    LoginComponent,
    CadastroComponent,
    CadErrorComponent,
    DiffSenhaComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
