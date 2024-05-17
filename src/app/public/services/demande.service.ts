import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Demandedto } from '../model/demandedto.model';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  private eventSource: EventSource | undefined;


  constructor(private http: HttpClient) { }

  saveNewDemande(demande: Demandedto): Observable<Demandedto> {
    return this.http.post<Demandedto>(environment.apiUrl + "/demandes", demande);
  }
}
