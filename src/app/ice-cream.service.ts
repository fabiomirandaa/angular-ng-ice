import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IceCreamService {
  getIceCreams(): Observable<any[]> {
    return;
  }
}
