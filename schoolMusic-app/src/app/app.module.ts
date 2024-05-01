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
import { FooterComponent } from './components/footer/footer.component';
import { StartHereComponent } from './views/start-here/start-here.component';
import { LearningPathsComponent } from './/views/learning-paths/learning-paths.component';
import { SupportComponent } from './views/support/support.component';
import { CardComponent } from './components/card/card.component';
import { CarouselComponent } from './views/learning-paths/components/carousel/carousel.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    LoginComponent,
    ButtonComponent,
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive,
    RouterModule,
    InputComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    StartHereComponent,
    LearningPathsComponent,
    SupportComponent,
    CardComponent,
    CarouselComponent,
    HttpClientModule,
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
