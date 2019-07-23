import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeciesModule } from './species/species.module';
import { NavbarComponent } from './core/navbar/navbar.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { ContentComponent } from './core/content/content.component';
import { UsersListComponent } from './user/users-list/users-list.component';
import { ObservationComponent } from './observation/observation.component'
import { AuthService } from './user/login/auth.service';
import { UserService } from './user/shared/user.service';
import { SpeciesService } from './species/shared/species.service';
import { ObservationService } from './observation/shared/observation.service';
import { ObservationsListComponent } from './observation/observations-list/observations-list.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { ObservationFormComponent } from './observation/observation-form/observation-form.component';
import { ObservationNewComponent } from './observation/observation-new/observation-new.component';
import { HttpInterceptorProviders } from './interceptors';
import { ObservationEditComponent } from './observation/observation-edit/observation-edit.component';
import { UserSettingsComponent } from './user/user-settings/user-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    UsersListComponent,
    ObservationComponent,
    ObservationsListComponent,
    LoginComponent,
    RegisterComponent,
    UserDetailComponent,
    DashboardComponent,
    ObservationFormComponent,
    ObservationNewComponent,
    ObservationEditComponent,
    UserSettingsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    SpeciesModule
  ],
  providers: [
    HttpInterceptorProviders,
    AuthService,
    UserService,
    ObservationService,
    SpeciesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
