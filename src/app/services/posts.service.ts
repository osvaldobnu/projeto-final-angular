import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class PostsService {
  constructor() { }

  async getPosts () {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar dados", error)
      throw error
    }
  }
}