import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

interface Collect {
  collectName: string;
  data: any[]; 
}

interface CollectResponse {
  data: Collect[];
}

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  server: string = "http://localhost:8080"; 

  constructor(private http: HttpClient) { }
  getCollects() {
    return this.http.get<CollectResponse>(this.server + '/collect').pipe(
      catchError(error => {
        console.error('Error fetching collects:', error);
        return of({ data: [] });
      })
    );
  }
  createCollect(newRequest: any) {
    const collectName = 'request';
    return this.getCollects().pipe(
      map((data: CollectResponse) => {
        const requests: any[] = data.data[0]?.data || []; 
        requests.push(newRequest);  
        return this.storeCollect(collectName, requests);
      }),
      catchError(error => {
        console.error('Error adding request:', error);
        return of({ message: 'Error adding request' });
      })
    );
  }

  storeCollect(collectName: string, collectData: any) {
    const url = `${this.server}/collect`; 
    return this.http.post(url, { [collectName]: collectData }).pipe(
      catchError(error => {
        console.error('Error storing collect:', error);
        return of({ message: 'Error storing collect' });
      })
    );
  }
}
