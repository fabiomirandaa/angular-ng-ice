import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IceCreamService {
  constructor(private httpClient: HttpClient) {}

  getIceCreams(): Observable<any[]> {
    return this.httpClient.get<any[]>('api/icecreams');
  }
}
