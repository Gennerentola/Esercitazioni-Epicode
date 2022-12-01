import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { getPostFiltered, changeStatus } from '../post-service.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent implements OnInit {


  posts:Post[] = []


  constructor() { }

  ngOnInit(): void {
    this.posts=[]
    let t = getPostFiltered(true)
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
