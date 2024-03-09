import { Component } from '@angular/core';
import { AutenticacaoService } from '../../services/autenticacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor (private autenticacaoService : AutenticacaoService, private serviceRouter : Router) {}

  submit(form : any) {
    this.autenticacaoService.logar(form.nome, form.senha);
    this.serviceRouter.navigate(["/home"])
  }
}
