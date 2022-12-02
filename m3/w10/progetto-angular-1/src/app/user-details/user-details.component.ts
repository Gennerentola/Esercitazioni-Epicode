import { Component, OnInit } from '@angular/core';
import { User } from '../interface/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  users: User[] = [];
  nome!: string;
  email!: string;
  role!: "adimn" | "user";

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    let path = Number(sessionStorage.getItem("id"));
    let f = fetch("http://localhost:3000/users")
    let r = f.then((res):Promise<User[]>=>{
      if(res.ok){
        return res.json()
      }
      throw new Error("Lettura fallita")
    })

    r.catch((err)=>{
      console.log("Errore", err.getMessage());
    })
    this.users = [];
    r.then((res) => {
      this.users = res
      console.log(this.users)
      let user = this.users[path - 1]
      console.log(user)
      this.nome = user.name;
      this.email = user.email;
      this.role = user.role;
      return;
    })

  }

}
