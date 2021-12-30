import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { DataService } from './data.service';

@Injectable()
export class MotivacionService extends DataService {

  constructor(http: HttpClient) {
    super(environment.apiURL + "motivacion/", http);
  }

  public getLast() {
    return this.getHttp().get(environment.apiURL + "motivacion/last")
  }

}
