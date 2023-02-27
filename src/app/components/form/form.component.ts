import { Component } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  newPost: Post = { id: 0, title: "", body: "", image: "", date: "" }
  msg: boolean = false;
  textmsg: string = "";

  constructor(private postsService: PostsService) { }

  guardar() {
    if (this.newPost.title !== "" && this.newPost.body !== "" && this.newPost.image !== "" && this.newPost.date !== "") {
      //enviarselo al servicio
      let msg = this.postsService.insertPost(this.newPost);
      console.log(msg);
      this.newPost = { id: 0, title: "", body: "", image: "", date: "" }
    } else {
      //mensaje de error
      alert('Los campos no pueden estar vacios')
    }
  }
}
