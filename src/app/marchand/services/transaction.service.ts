import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../model/transaction.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http:HttpClient) {}


  getAll(): Observable< Array<Transaction>> {
    return this.http.get< Array<Transaction>>(environment.apiUrl + "/transaction/all")
  }

  getTransactionsByMarchandId(marchandId: number): Observable< Array<Transaction>> {
    return this.http.get< Array<Transaction>>(environment.apiUrl + "/transaction/byMarchand/"+ marchandId)
  }

  getTransactionsByPaymentMethodName(name: string): Observable< Array<Transaction>> {
    return this.http.get< Array<Transaction>>(environment.apiUrl + "/transaction/byPaymentMethodName/"+ name)
  }

  //////////

  getTransactionById(id: number): Observable<Transaction> {
    return this.http.get<Transaction>(environment.apiUrl+ "/transaction/" + id)
  }


  findByName(name: string): Observable< Array<Transaction>> {
    return this.http.get< Array<Transaction>>(environment.apiUrl + "/transaction/findByName/"+ name)
  }

}
