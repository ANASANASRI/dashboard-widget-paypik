import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Demandedto } from '../model/demandedto.model';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  private eventSource: EventSource | undefined;


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

  updateDemandeUpdateAndAccepted(demandeId: number,demande: Demandedto): Observable<Demandedto> {
    return this.http.put<Demandedto>(environment.apiUrl + "/demandes/" + demandeId +"/update/accepted", demande);
  }

  updateDemandeUpdate(demandeId: number,demande: Demandedto): Observable<Demandedto> {
    return this.http.put<Demandedto>(environment.apiUrl + "/demandes/" + demandeId +"/update", demande);
  }
//////////////// SEE

  // getAllDemandesNotVerifiedSEE(): Observable<Demandedto> {
  //   const headers = new HttpHeaders().set('Content-Type', 'text/event-stream');
  //   const eventSourceUrl = environment.apiUrl + '/demandes/not-verified-sse?headers=' + encodeURIComponent(JSON.stringify(headers));
  //   return new Observable<Demandedto>(observer => {
  //     this.eventSource = new EventSource(eventSourceUrl);

  //     this.eventSource.onmessage = (event) => {
  //       const demande: Demandedto = JSON.parse(event.data);
  //       observer.next(demande);
  //     };

  //     this.eventSource.onerror = (error) => {
  //       console.error('EventSource failed:', error);
  //       observer.error(error);
  //     };

  //     return () => {
  //       this.closeSSEConnection(); // Call closeSSEConnection() when the Observable is unsubscribed
  //     };
  //   });
  // }

  // closeSSEConnection() {
  //   if (this.eventSource) {
  //     this.eventSource.close();
  //   }
  // }


}
