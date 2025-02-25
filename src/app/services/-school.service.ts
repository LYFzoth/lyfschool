  import { HttpClient } from '@angular/common/http';
  import { Injectable } from '@angular/core';

  @Injectable({
    providedIn: 'root',
  })


  export class SchoolService {
    constructor(private http: HttpClient) {}

    getProducts() {
      return this.http.get('http://localhost:8080/school');
  }
  create(school: any){
    return this.http.post('http://localhost8080/school', school);
  }

  } 