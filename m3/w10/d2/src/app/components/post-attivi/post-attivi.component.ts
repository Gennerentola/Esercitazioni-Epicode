import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import * as readSrv from '../../service/read.service';

@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent implements OnInit {

  posts: Post[] = [];

  constructor() {
    console.log(readSrv.getPosts())
    readSrv.getPosts().then((posts)=> (this.posts = posts.filter(post => post.active)));
  }

  ngOnInit(): void {
  }

}
