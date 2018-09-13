import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard.service';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
    declarations: [LoginComponent],
    imports: [ CommonModule,
    FormsModule,
    ReactiveFormsModule ],
    exports: [],
    providers: [AuthGuardService,
        LoginService,
    PreventUnsavedChangesGuard],
})
export class LoginModule {}

