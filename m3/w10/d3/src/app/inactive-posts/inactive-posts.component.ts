import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { getPostFiltered, changeStatus } from '../post-service.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent implements OnInit {

  posts:Post[]=[]

  constructor() { }

  ngOnInit(): void {
    this.posts=[]
    let t = getPostFiltered(false)
    t.then((res)=>{
      this.posts=res
    })
  }

  switchActive(index: number) {
    changeStatus(index);
    this.posts = this.posts.filter((e) => {
      if (e.id == index) { return false }
      return true
    })
  }

}
