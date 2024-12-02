import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
import { NotFoundComponent } from './error/loginCad/login/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'listaCarne', component: ListaCarneComponent },
  { path: 'cadastroProd', component: CadastroProdComponent },
  { path: 'edicaoProd/:id/:nome/:peso/:preco/:img', component: EdicaoProdComponent },
  { path: 'compraProd/:id/:nome/:preco', component: CompraProdComponent },
  { path: 'listaPedido', component: ListaPedidoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'cadError', component: CadErrorComponent },
  { path: 'diffSenha', component: DiffSenhaComponent },
  { path: 'naoEnc', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }