import { environment } from './../../environments/environment';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ColumnaService extends DataService {

  constructor(http: HttpClient) {
    super(environment.apiURL + "columna/", http);
  }

  public getLast() {
    return this.getHttp().get(environment.apiURL + "columna/last")
  }

}
