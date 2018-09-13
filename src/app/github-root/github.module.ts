import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { GitHubComponent } from './github/github.component';
import { GitHubUserComponent } from './githubuser/githubuser.component';
import { GitHubService } from './github/github.service';



@NgModule({
    declarations: [GitHubComponent,
    GitHubUserComponent],
    imports: [ CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule ],
    exports: [],
    providers: [GitHubService],
})
export class GitHubModule {}