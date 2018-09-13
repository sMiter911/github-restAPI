import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { GitHubModule } from './github-root/github.module';
import { LoginModule } from './login/login.module';
import { GitHubRouting } from './github-root/github.routing';
import { routing } from './app.routing';
import { AboutUsComponent } from './about-us/about-us.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    GitHubRouting,
    routing,
    GitHubModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
