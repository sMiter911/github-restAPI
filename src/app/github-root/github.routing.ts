import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitHubComponent } from './github/github.component';
import { GitHubUserComponent } from './githubuser/githubuser.component';
import { AuthGuardService } from '../login/auth-guard.service';

export const GitHubRouting = RouterModule.forChild([
  {path: 'GitHub', component: GitHubComponent, canActivate: [AuthGuardService]},
  {path: 'GitHub/user/:login/:score', component: GitHubUserComponent, canActivate: [AuthGuardService]},
]);