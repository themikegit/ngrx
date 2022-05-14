import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private URL_LINK = 'https://reqres.in/api/users?page=2';

  getAllUsers() {
    return this.http.get(this.URL_LINK);
  }
}
