import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { Routes, RouterModule } from '@angular/router';
import { VisitorComponent } from './visitor/visitor.component';
import { LogsComponent } from './visitor/logs/logs.component';
import { VisitorDetailComponent } from './visitor/visitor-detail/visitor-detail.component';
import { VisitorListComponent } from './visitor/visitor-list/visitor-list.component';
import { EditVisitorComponent } from './visitor/edit-visitor/edit-visitor.component';
import { AuthGuard } from './auth/auth-guard.guard';
import { VisitorLogsListComponent } from './visitor/visitor-logs-list/visitor-logs-list.component';
import { ActiveVisitorLogsListComponent } from './visitor/active-visitor-logs-list/active-visitor-logs-list.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { RegisterComponent } from './auth/register/register.component';

 const appRoutes: Routes = [
   {path: '', redirectTo: '/auth', pathMatch: 'full'},
   {path: 'visitor',
    component: VisitorListComponent,
    canActivate: [AuthGuard]
  },
   {path: 'auth', component: AuthComponent},
   {path: 'visitor/new',
    component: VisitorComponent,
    canActivate: [AuthGuard]
  },
   {path: 'visitor/:id',
    component: VisitorDetailComponent,
    canActivate: [AuthGuard]
  },
   {path: 'visitor/:id/edit',
    component: EditVisitorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'visitor/:id/log',
    component: LogsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'logs',
    component: VisitorLogsListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'activeVisitor',
    component: ActiveVisitorLogsListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'changePassword',
    component: ChangePasswordComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'forgotPassword',
    component: ResetPasswordComponent,

  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthGuard]
  }

]


@NgModule({

  imports: [

    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
