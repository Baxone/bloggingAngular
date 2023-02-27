import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  arrPost: Post[] = [];
  id: number = 3;

  constructor() {
    this.arrPost = [
      {
        id: 1,
        title: "En un lugar de la mancha",
        body: "Noticia 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, porro. Hic aperiam nobis at veritatis, quis iusto nostrum necessitatibus delectus, quas similique in optio esse harum odit molestiae perferendis dolorum. Eveniet impedit explicabo cumque reiciendis quae omnis sit maiores, inventore quod obcaecati",
        image: "https://fastly.picsum.photos/id/0/367/267.jpg?hmac=7vvdjNHaShwe3Ul3DAaQIBBz0RnNLfUcEaCV-94NNLE",
        date: '2023-02-12'
      },
      {
        id: 2,
        title: "Solo se que no se nada",
        body: "Noticia 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, porro. Hic aperiam nobis at veritatis, quis iusto nostrum necessitatibus delectus, quas similique in optio esse harum odit molestiae perferendis dolorum. Eveniet impedit explicabo cumque reiciendis quae omnis sit maiores, inventore quod obcaecati veniam architecto!",
        image: "https://fastly.picsum.photos/id/4/367/267.jpg?hmac=Rqu-I3Sq8iKayz1FUM3EuPZnWCQHYBXAfzPOJKv3iGk",
        date: '2023-02-24'
      }
    ]
  }

  ngOnInit(): void {
    this.cargarDatos()
  }

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
}
