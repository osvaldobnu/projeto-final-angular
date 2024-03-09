import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  constructor() { }

  logar(login : string, senha : string){
    localStorage.setItem("login", login);
    localStorage.setItem("senha", senha);
  }

  deslogar() {
    localStorage.clear();
  }

  validaUsuarioLogado() {
    return !!localStorage.getItem("login");
  }
}