import { IceCream } from './models/icecream';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IceCreamService {
  constructor(private httpClient: HttpClient) {}

  getIceCreams() {
    return this.httpClient.get<IceCream[]>('api/icecreams');
  }

  getIceCreamById(id: number) {
    return this.httpClient.get<IceCream>(`api/icecreams/${id}`);
  }

  getIceCreamByTerm(term: string) {
    return this.httpClient.get<IceCream[]>(`api/icecreams?name=${term}`);
  }
}
