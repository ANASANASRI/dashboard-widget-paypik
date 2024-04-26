import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Demandedto } from '../model/demandedto.model';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor(private http: HttpClient) { }

  saveNewDemande(demande: Demandedto): Observable<Demandedto> {
    return this.http.post<Demandedto>(environment.apiUrl + "/demandes", demande);
  }

  getAllDemandes(): Observable<Demandedto[]> {
    return this.http.get<Demandedto[]>(environment.apiUrl + "/demandes");
  }

  getDemande(demandeId: number): Observable<Demandedto> {
    return this.http.get<Demandedto>(environment.apiUrl + "/demandes/demande/" + demandeId);
  }

  getAllDemandesNotVerified(): Observable<Demandedto[]> {
    return this.http.get<Demandedto[]>(environment.apiUrl +"/demandes/not-verified");
  }

  updateDemandeRejected(demandeId: number): Observable<Demandedto> {
    return this.http.put<Demandedto>(environment.apiUrl +"/demandes/"+ demandeId +"/rejected" , null);
  }

  updateDemandeAccepted(demandeId: number): Observable<Demandedto> {
    return this.http.put<Demandedto>(environment.apiUrl + "/demandes/" + demandeId +"/accepted", null);
  }
}
