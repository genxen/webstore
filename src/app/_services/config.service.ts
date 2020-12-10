import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  getWsUrl(
    resource:string = 'products'
  ):string {
    return `${environment.ws.protocol}://${environment.ws.host}:${environment.ws.port}/${resource}`;
  }
}
