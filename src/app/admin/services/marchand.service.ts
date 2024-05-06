import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Marchand } from "src/app/admin/model/marchand.model";

@Injectable({
  providedIn: 'root'
})
export class MarchandService {

  constructor(private http:HttpClient){ }

  public getMarchands(): Observable<Array<Marchand>> {
    return this.http.get<Array<Marchand>>(environment.apiUrl + "/marchand/all")
  }

  public getMarchandById(id: number): Observable<Array<Marchand>> {
    return this.http.get<Array<Marchand>>(environment.apiUrl + "/marchand/" + id)
  }

  // public searchMarchands(keyword: string): Observable<Array<Marchand>> {
  //   return this.http.get<Array<Marchand>>(environment.apiUrl + "/marchands/search?keyword=" + keyword)
  // }

  public saveMarchand(marchand: Marchand): Observable<Marchand> {
    return this.http.post<Marchand>(environment.apiUrl + "/marchand/save", marchand)
  }

  public deleteMarchand(id: number): Observable<Marchand> {
    return this.http.delete<Marchand>(environment.apiUrl + "/marchand/delete/" + id)
  }

  public editMarchand(marchand: Marchand): Observable<Marchand> {
    return this.http.put<Marchand>(environment.apiUrl + "/marchand/update" , marchand);
  }

  findStatusMarchandPayment(marchandId: number, paymentMethodId: number): Observable<boolean> {
    return this.http.get<boolean>(environment.apiUrl + '/method/status/' + marchandId + '/' + paymentMethodId)
  }

}
