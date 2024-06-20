
import { Component, Injectable, OnInit, inject } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';


@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent  implements OnInit {

  private postService: PostService= inject(PostService)

  postList: Post[]=[]

  ngOnInit(): void {
    this.postService.getPost().subscribe(response =>{
      this.postList = response
    } )
  }


}
