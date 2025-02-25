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
  providedIn: 'root',
})
export class RequestService {
  server: string =
    'https://dummy-backend-products-94cnt3494-xenoo0os-projects.vercel.app';

  accessToken = 'eKTechaEQ5GWOnTClVE2LHqj';

  constructor(private http: HttpClient) {}
  getCollects() {
    return this.http.get<CollectResponse>(this.server + '/collect').pipe(
      catchError((error) => {
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
      catchError((error) => {
        console.error('Error adding request:', error);
        return of({ message: 'Error adding request' });
      })
    );
  }

  storeCollect(collectName: string, collectData: any) {
    const url = `${this.server}/collect`;
    return this.http.post(
      url,
      { [collectName]: collectData },
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );
  }
}
