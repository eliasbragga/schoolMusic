import { Component, Output } from '@angular/core';
import {ButtonComponent} from '../../components/button/button.component'
import { InputComponent } from '../../components/input/input.component';
import usersData from '../../../db/users';
import { ContextService } from '../../service/context.service';
import { LoginData } from '../../interfaces/login-data';


@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [ButtonComponent, InputComponent]

})
export class LoginComponent {
  valor: string = ''
  cpf!: string
  password!: string
  user: Array<LoginData> = usersData.filter(user => user.login === this.cpf && user.password === this.password)


  constructor(
    private contextService: ContextService
  ){
    // contextService.$tokenCtx.subscribe((value) => {})
  }

  login(): void {   
   this.contextService.login(this.cpf, this.password)
  }

  getLogin(e: string) {
    this.cpf = e
  }

  getPassword(e: string) {
    this.password = e
  }
}
