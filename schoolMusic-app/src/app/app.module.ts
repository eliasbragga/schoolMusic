import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { ButtonComponent } from './components/button/button.component';
import { HomeComponent } from './views/home/home.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginComponent,
    ButtonComponent,
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive,
    RouterModule,
    InputComponent,
    HomeComponent,
    HeaderComponent,
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
