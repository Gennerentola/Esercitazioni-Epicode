import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivePostsComponent } from './active-posts/active-posts.component';
import { HomeComponent } from './home/home.component';
import { InactivePostsComponent } from './inactive-posts/inactive-posts.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "active",
    component: ActivePostsComponent
  },
  {
    path: "inactive",
    component: InactivePostsComponent
  },
  {
    path: "user",
    component: UserComponent,
    children: [
      {
        path: ":id",
        component: UserDetailsComponent
      }
    ]
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
