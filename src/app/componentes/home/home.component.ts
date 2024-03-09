import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { AutenticacaoService } from '../../services/autenticacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  posts: any[] = [];
  constructor(
    private postService: PostsService,
    private autenticacaoService: AutenticacaoService,
    private serviceRouter : Router
  ) {}

  // Quero que chave a api quando finalizar a renderização da tela (apenas uma vez)
  ngOnInit(): void {
    this.postService
      .getPosts()
      .then((posts) => {
        this.posts = posts;
      })
      .catch((error) => {
        console.error('Erro ao buscar os dados', error);
      });
  }

  deslogar() {
    this.autenticacaoService.deslogar();
    this.serviceRouter.navigate(["/"])
  }
}
