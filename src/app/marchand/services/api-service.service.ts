import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private apiUrl = 'https://api.tailwindstream.io';

  constructor(private http: HttpClient) {}

  requestDownload(payload: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/request`, payload);
  }

  downloadWithRetry(requestId: string): Observable<Blob> {
    return new Observable((observer) => {
      const intervalId = setInterval(() => {
        this.http.get(`${this.apiUrl}/request/${requestId}/download`, { responseType: 'blob' }).subscribe(
          (blob: Blob) => {
            clearInterval(intervalId);
            this.downloadToBrowser(blob);
            observer.next(blob);
            observer.complete();
          },
          (error) => {
            clearInterval(intervalId);
            observer.error('Download failed.');
          }
        );
      }, 2500);
    });
  }

  private downloadToBrowser(blob: Blob) {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = new Date().toISOString() + '.' + blob.type.split('/')[1];
    document.body.appendChild(a);
    a.click();
    a.remove();
  }
}
