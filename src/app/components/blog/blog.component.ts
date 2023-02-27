import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

  }

  /*
  cargarDatos(): string {
    let section = ""
    this.arrPost.forEach(post => {
      section += `<article class="col-12 col-md-6 col-lg-4">
              <div class="card" >
              <img src="${post.image}" class="card-img-top" alt="${post.title}">
              <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">${post.body}</p>
                <small class="text-muted">${post.date}</small>
              </div>
            </div></article>`
    })
    return section
  }
  */

}
