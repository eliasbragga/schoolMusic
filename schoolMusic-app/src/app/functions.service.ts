import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  constructor(
    private router: Router
  ) {}

  redirectRoute(rota: string) {
    this.router.navigate([`${rota}`]);
  }
}
