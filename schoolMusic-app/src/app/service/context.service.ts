import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import usersData from '../../db/users';


@Injectable({
  providedIn: 'root'
})
export class ContextService {
  private token = new BehaviorSubject('')
  private loginIn = new BehaviorSubject('')
  $loginIn = this.loginIn.asObservable()
  $tokenCtx = this.token.asObservable()

  constructor(
    private router: Router
  ) {}

  redirectRoute(rota: string) {
    this.router.navigate([`${rota}`]);
  }

   generateRandomToken() {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let token = '';
    for (let i = 0; i < 20; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      token += charset[randomIndex];
    }
    return token;
  }

  login(cpf: string, password: string) {
    const user = usersData.filter(user => user.login === cpf && user.password === password)
    if(user.length) {
      const token = this.generateRandomToken()
      this.saveToken(token)
      if(this.getToken())  {
        this.redirectRoute('home')
      }
    }
  }

  logout() {
    sessionStorage.clear()
    console.log(sessionStorage.getItem("token"))
    return this.redirectRoute('')
  }

  getToken() {
    return sessionStorage.getItem("token")
  }

  saveToken(token: string) {
    this.token.next(token)
    sessionStorage.setItem("token", token);
  }

  changeTestCtx(value: string) {
  }
}
