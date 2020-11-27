import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, ɵNgSelectMultipleOption} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { VisitorComponent } from './visitor/visitor.component';
import { LogsComponent } from './visitor/logs/logs.component';
import { VisitorDetailComponent } from './visitor/visitor-detail/visitor-detail.component';
import {DropdownDirective } from './shared/dropdown.directive';
import { VisitorListComponent } from './visitor/visitor-list/visitor-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { visitorListService } from './Services/visitorList.service';
import { EditVisitorComponent } from './visitor/edit-visitor/edit-visitor.component';
import {NgSelectModule} from '@ng-select/ng-select';
import { TokenInterceptor} from './shared/token-interceptor';
import { AuthService } from './Services/auth.service';
import { GetVisitorTypeService } from './Services/get-visitor-type.service';
import { LogsServices } from './Services/logs.service';
import { AuthGuard } from './auth/auth-guard.guard';
import { SearchFilterPipe } from './shared/search-filter.pipe';
import { VisitorLogsListComponent } from './visitor/visitor-logs-list/visitor-logs-list.component';
import { visitor } from './visitor/visitor-model/visitor';
import { SearchLogsPipe } from './shared/search-logs.pipe';
import { ActiveVisitorLogsListComponent } from './visitor/active-visitor-logs-list/active-visitor-logs-list.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { RegisterComponent } from './auth/register/register.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    VisitorComponent,
    LogsComponent,
    VisitorDetailComponent,
    DropdownDirective,
    VisitorListComponent,
    EditVisitorComponent,
    SearchFilterPipe,
    VisitorLogsListComponent,
    SearchLogsPipe,
    ActiveVisitorLogsListComponent,
    ChangePasswordComponent,
    ResetPasswordComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgSelectModule,
    AppRoutingModule

  ],
  providers: [visitorListService, AuthService, AuthGuard, GetVisitorTypeService, LogsServices,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
