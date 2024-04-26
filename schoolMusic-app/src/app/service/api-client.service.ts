import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  constructor(
    private http: HttpClient
  ) { }

  private pathUsers: string = 'https://api.github.com/'

  getUsers() {
    return this.http.get(this.pathUsers + 'users').pipe(
      map(response => response)
    )
  }
}
