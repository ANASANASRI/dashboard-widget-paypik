import { Injectable } from '@angular/core';
import { Marchand } from '../model/marchand.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MarchandService {

  constructor(private http: HttpClient) { }

  getMarchandById(id: number): Observable<Marchand> {
    return this.http.get<Marchand>(environment.apiUrl + "/marchand/"+ id)
  }
}


