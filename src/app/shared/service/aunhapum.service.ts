import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AunhapumService {

  constructor(
    private http: HttpClient

  ) { }

  getData() {
    return this.http.get('api/data');
  }

  

}
