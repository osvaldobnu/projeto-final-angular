import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AutenticacaoService } from '../services/autenticacao.service';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoGuard {
  constructor(
    private autenticacaoService: AutenticacaoService,
    private routerService: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.autenticacaoService.validaUsuarioLogado()) {
      return true;
    }

    this.routerService.navigate(['/login']);
    return false;
  }
}
