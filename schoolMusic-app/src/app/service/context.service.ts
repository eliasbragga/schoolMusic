import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import usersData from '../../db/users';
import { LinksMenu } from '../interfaces/links-menu';


@Injectable({
  providedIn: 'root'
})
export class ContextService {
  links = [
    { name: 'Inicio', routerPath: 'inicio', selected: true },
    {space: true},
    { name: 'Comece por aqui', routerPath: 'comece-por-aqui', selected: false },
    { name: 'Trilhas', routerPath: 'trilhas', selected: false },
    { name: 'Suporte', routerPath: 'suporte', selected: false}
  ];
  
  private token = new BehaviorSubject('')
  private loginIn = new BehaviorSubject('')
  private linksMenuList = new BehaviorSubject(this.links)
  $loginIn = this.loginIn.asObservable()
  $linksMenuList = this.linksMenuList.asObservable()
  $tokenCtx = this.token.asObservable()

  constructor(
    private router: Router
  ) {}

  redirectRoute(rota?: string) {
    this.router.navigate([`${rota}`]);
  }

  //TODO ajustar tipo de newArraysLinks
  changeLinksMenu(newArrayLinks: any) {
    this.linksMenuList.next(newArrayLinks)
  }

  selectLink(linkName?: string) {
    const indexLink = this.links.findIndex(link => link.name === linkName)
    this.links.forEach(link => link.selected = false)
    if(indexLink !== -1) this.links[indexLink].selected = true
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
