import { Post } from "../models/post";

let post: Post[] = [];

export async function getPosts() {
    let res = await fetch("http://localhost:3000");
    let post:Post[] = await res.json();
    return post;
}

export async function getPostsFilter(active:boolean){
  (await getPosts()).filter((e) => {
    if(e.active == active){
      return true;
    } else {
      return false;
    }
    return getPosts();
});
}
