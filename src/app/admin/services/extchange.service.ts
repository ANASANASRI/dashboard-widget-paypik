import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ExtchangeService {


  private apiUrl = environment.apiUrl + '/extchange';

  constructor(private http: HttpClient) { }

  convertCurrency(amount: number, currency: string): Observable<string> {
    const url = `${this.apiUrl}/convert?amount=${amount}&currency=${currency}`;
    return this.http.get<string>(url);
  }

}
