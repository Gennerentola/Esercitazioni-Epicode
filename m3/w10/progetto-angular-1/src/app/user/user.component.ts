import { Component, OnInit } from '@angular/core';
import { getUsers } from '../post-service.service';
import { User } from '../interface/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: User[] = []
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.users = [];
    let t = getUsers();
    t.then((res) => {
      this.users = res
    })
  }

  navigate(id: number) {
    this.router.navigate([":"+id], {relativeTo:this.route});
    sessionStorage.setItem("id", `${id}`);
  }

}


