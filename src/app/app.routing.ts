import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthGuardService } from './login/auth-guard.service';
import { LoginComponent} from './login/login.component';
import { PreventUnsavedChangesGuard  } from './login/prevent-unsaved-changes-guard.service';

export const routing = RouterModule.forRoot([
    {path: '', component: HomeComponent, canActivate: [AuthGuardService]},
    {path: 'login', component: LoginComponent, canDeactivate: [PreventUnsavedChangesGuard]},
    {path: 'AboutUs', component: AboutUsComponent},
    {path: '**', component: NotFoundComponent}
]);
