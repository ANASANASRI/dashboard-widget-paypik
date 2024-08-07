import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaymentMethod } from '../model/paymentmethod.model';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class MethodService {


  constructor(private http:HttpClient){ }

  getAll(): Observable<PaymentMethod[]> {
    return this.http.get<PaymentMethod[]>(environment.apiUrl + '/method/findAll')
  }

  getPaymentMethodeById(id: number): Observable<PaymentMethod> {
    return this.http.get<PaymentMethod>(environment.apiUrl + '/method/findById/' + id)
  }

  updateMarchandMethodStatus(paymentMethodId: number, marchandId: number): Observable<any> {
    return this.http.put<any>(environment.apiUrl + '/method/'+ marchandId + '/payment-method/' + paymentMethodId ,{}) 
  }
}
