import { Injectable } from '@angular/core';
import { POSTS } from '../db/posts.db';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private arrPost: Post[] = POSTS
  private id: number = 3;
  constructor() { }

  getAll(): Post[] {
    return this.arrPost
  }

  insertPost(pNewPost: Post): string {
    pNewPost.id = this.id;
    this.arrPost.push(pNewPost);
    this.id++;
    return "ok";
  }
}
