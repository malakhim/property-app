import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const activeTenanciesUrl = 'api/tenancies/active';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) {  }

  getTenancies() {

  }

  getActiveTenancies() {
    return this.http.get(activeTenanciesUrl);
  }
}
