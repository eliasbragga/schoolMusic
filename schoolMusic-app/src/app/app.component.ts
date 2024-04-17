import { Component, OnInit } from '@angular/core';
import { ContextService } from './service/context.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  links = [
    {name: 'Comece por aqui'},
    {name: 'Trilhas'},
    {name: 'Suporte'}
  ];
  loggedIn: string | null = ''
  constructor(
    private contextService: ContextService,
    ) {
      contextService.$tokenCtx.subscribe((value) => {
        this.loggedIn = sessionStorage.getItem("token")
      })
    }

  ngOnInit(): void {
    this.loggedIn = sessionStorage.getItem("token")
  }
 
}
