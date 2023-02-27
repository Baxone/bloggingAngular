import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-lists-post',
  templateUrl: './lists-post.component.html',
  styleUrls: ['./lists-post.component.css']
})
export class ListsPostComponent implements OnInit {

  arrPosts: Post[] = [];
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.arrPosts = this.postsService.getAll();
  }
}
