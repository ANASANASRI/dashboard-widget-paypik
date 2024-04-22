import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Marchand } from "src/app/admin/model/marchand.model";


@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http:HttpClient){ }

  public getMarchands(): Observable<Array<Marchand>> {
    return this.http.get<Array<Marchand>>(environment.backendHost + "/marchands")
  }

  public searchMarchands(keyword: string): Observable<Array<Marchand>> {
    return this.http.get<Array<Marchand>>(environment.backendHost + "/marchands/search?keyword=" + keyword)
  }

  public saveMarchand(customer: Marchand): Observable<Marchand> {
    return this.http.post<Marchand>(environment.backendHost + "/marchands", customer)
  }

  public deleteMarchand(id: number): Observable<Marchand> {
    return this.http.delete<Marchand>(environment.backendHost + "/marchands/" + id)
  }

  public editMarchand(id: number, customer: Marchand): Observable<Marchand> {
    return this.http.put<Marchand>(environment.backendHost + "/marchands/" + id, customer)
  }

}
