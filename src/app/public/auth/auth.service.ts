import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Signin } from './signin/signin.model';
import { Observable } from 'rxjs';
import { Token } from './signin/Token';
import { environment } from 'src/environments/environment.development';
import { Marchand } from 'src/app/marchand/model/marchand.model';
import { User } from 'src/app/admin/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = environment.apiUrl + "/auth/signin";

  constructor(private http: HttpClient) { }

  
  signin(credentials: Signin): Observable<Token> {
    return this.http.post<Token>(this.url, credentials);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(environment.apiUrl+'/auth/findbyid/'+id);
  }

  findMarchandIdByMarchandName(marchandName: string): Observable<number> {
    return this.http.get<number>(environment.apiUrl +"/marchand/marchandName/"+ marchandName);
  }
  
  findMarchandById(id: number): Observable<Array<Marchand>> {
    return this.http.get<Array<Marchand>>(environment.apiUrl + "/marchand/findById/" + id);
  }

  // Nouvelle méthode pour récupérer l'ID de l'utilisateur authentifié
  getAuthenticatedUserId(): number {
    const token = localStorage.getItem('token');
    if (!token) {
      return 0; // Retourne 0 si aucun token n'est présent
    }
    const payload = JSON.parse(atob(token.split('.')[1]));
    //console.log('userId',payload.id)
    return payload.id; // Retourne l'ID de l'utilisateur extrait du payload JWT
  }

  // Méthodes pour vérifier les rôles de l'utilisateur
  isAdmin(): boolean {
    const userRoles = this.getUserRoles();
    return userRoles.includes('ROLE_ADMIN');
  }

  isSuperAdmin(): boolean {
    const userRoles = this.getUserRoles();
    return userRoles.includes('ROLE_ADMIN') && userRoles.includes('ROLE_COMMERCIAL') && userRoles.includes('ROLE_MARCHAND');
  }  

  isCommercial(): boolean {
    const userRoles = this.getUserRoles();
    return userRoles.includes('ROLE_COMMERCIAL');
  }

  isMarchand(): boolean {
    const userRoles = this.getUserRoles();
    return userRoles.includes('ROLE_MARCHAND');
  }

  
  private getUserRoles(): string[] {
    const token = localStorage.getItem('token');
    if (!token) {
      return [];
    }
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.roles || [];
  }

  private getUserRole(): string {
    const token = localStorage.getItem('token');
    if (!token) {
      return '';
    }
    const payload = JSON.parse(atob(token.split('.')[1]));
    const roles = payload.roles;
    if (roles && roles.length > 0) {
      return roles[0];
    }
    return '';
  }

}
