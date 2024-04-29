import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaymentMethod } from '../model/payment-method.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<Array<PaymentMethod>> {
    return this.http.get<Array<PaymentMethod>>(environment.apiUrl + "/method/findAll")
  }
/*utiliser pour Frant details transaction */
  getPymentMethodeById(id: number): Observable<PaymentMethod> {
    return this.http.get<PaymentMethod>(environment.apiUrl + "/method/findById/"+ id)
  }


  getPaimentMethodeBymerchanId(marchandId: number): Observable<Array<PaymentMethod>> {
    return this.http.get<Array<PaymentMethod>>(environment.apiUrl + "/method/pymentMethodeBymerchanId/"+ marchandId)
  }

}
