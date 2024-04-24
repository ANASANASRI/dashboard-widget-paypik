import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Transaction } from "src/app/admin/model/transaction.model";


@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http:HttpClient){ }

  public getTransactions(): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(environment.apiUrl + "/transaction/all")
  }

  // public searchTransactions(keyword: string): Observable<Array<Transaction>> {
  //   return this.http.get<Array<Transaction>>(environment.apiUrl + "/transactions/search?keyword=" + keyword)
  // }

  public saveTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(environment.apiUrl + "/transaction/save", transaction)
  }

  public deleteTransaction(id: number): Observable<Transaction> {
    return this.http.delete<Transaction>(environment.apiUrl + "/transaction/delete/" + id)
  }

  public editTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.put<Transaction>(environment.apiUrl + "/transactions/" + transaction.transactionId, transaction);
  }
  
}
