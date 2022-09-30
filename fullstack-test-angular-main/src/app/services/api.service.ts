import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Api } from '../models/api'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  public getHello(): Observable<any> {
    return this.http.get(environment.apiHost + '/hello');
  }

  public getDateTime(): Observable<Api>{    
    return this.http.get<Api>(environment.apiHost + '/now');
  }

  public showMessage(words: any){    
    return this.http.post(environment.apiHost + '/show', words);
  }

}
