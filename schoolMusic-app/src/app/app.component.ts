import { Component, OnInit } from '@angular/core';
import { ContextService } from './service/context.service';
import { ApiClientService } from './service/api-client.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  loggedIn: string | null = ''
  constructor(
    private contextService: ContextService,
    private apiClient: ApiClientService
    ) {
      contextService.$tokenCtx.subscribe((value) => {
        this.loggedIn = sessionStorage.getItem("token")
      })
    } 

    getUsers() {
      this.apiClient.getUsers().subscribe({
        next: (res => console.log('aq',res)),
        error: (err => console.log('A requisição falhou:', err)),
        complete: () => console.log('requisicao completa')
      })
    }

  ngOnInit(): void {
    this.contextService.redirectRoute('inicio')
    this.loggedIn = sessionStorage.getItem("token")
    this.getUsers()
   
  }
 
}
