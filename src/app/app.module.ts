import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SpeciesModule
  ],
  providers: [
    AuthService,
    UserService,
    ObservationService,
    SpeciesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
