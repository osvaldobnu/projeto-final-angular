import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { AutenticacaoGuard } from './guardas/autenticacao.guard';
import { PaginaNaoEncontradaComponent } from './componentes/pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  {
    path : "",
    pathMatch : "full",
    redirectTo : "login"
  },
  {
    path : "home",
    component : HomeComponent,
    canActivate : [AutenticacaoGuard]
  },
  {
    path : "login",
    component : LoginComponent
  },
  {
    path : "**",
    component : PaginaNaoEncontradaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
