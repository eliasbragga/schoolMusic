import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { StartHereComponent } from './views/start-here/start-here.component';
import { LearningPathsComponent } from './views/learning-paths/learning-paths.component';
import { SupportComponent } from './views/support/support.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, data:[{name: 'teste'}] },
  { path: 'inicio', component: LearningPathsComponent, data:[{name: 'teste'}] },
  { path: 'comece-por-aqui', component: StartHereComponent },
  { path: 'trilhas', component: LearningPathsComponent },
  { path: 'suporte', component: SupportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
