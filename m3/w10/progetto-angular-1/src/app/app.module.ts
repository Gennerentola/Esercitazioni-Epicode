import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ActivePostsComponent } from './active-posts/active-posts.component';
import { InactivePostsComponent } from './inactive-posts/inactive-posts.component';
import { ToUpCasePipe } from './pipe/to-up-case.pipe';
import { MarkerDirective } from './directives/marker.directive';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivePostsComponent,
    InactivePostsComponent,
    ToUpCasePipe,
    MarkerDirective,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
