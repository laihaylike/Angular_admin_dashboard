import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const url = 'http://localhost:3000/productList/';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http: HttpClient) { }

  public postProduct(data: any): any{
    return this.http.post<any>(url, data);
  }

  public getProduct(){
    return this.http.get<any>(url);
  }
}
