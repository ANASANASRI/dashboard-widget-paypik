import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { User } from 'src/app/admin/model/user.model';
import { Marchand } from 'src/app/marchand/model/marchand.model';
import { Signin } from './signin/signin.model';
import { Token } from './signin/Token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = environment.apiUrl + "/auth/signin";

  constructor(private http: HttpClient) { }

  signin(credentials: Signin): Observable<Token> {
    return this.http.post<Token>(this.url, credentials);
  }

  updatePassword(userId: number, oldPassword: string, newPassword: string): Observable<any> {
    const url = `${environment.apiUrl}/auth/users/${userId}/password`;
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const body = {
      oldPassword: oldPassword,
      newPassword: newPassword
    };
    return this.http.put<any>(url, body, { headers });
  }

  getUserByMarchandId(marchandId: number): Observable<number> {
    const url = `${environment.apiUrl}/auth/userbymarchandid/${marchandId}`;
    const headers = new HttpHeaders({'Accept': '*/*'});
    return this.http.get<number>(url, { headers });
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/auth/findbyid/${id}`);
  }

  findMarchandIdByMarchandName(marchandName: string): Observable<number> {
    return this.http.get<number>(`${environment.apiUrl}/marchand/marchandName/${marchandName}`);
  }

  findMarchandById(id: number): Observable<Array<Marchand>> {
    return this.http.get<Array<Marchand>>(`${environment.apiUrl}/marchand/findById/${id}`);
  }

  // New method to retrieve the `marchandId` by `userId`
  findMarchandIdByUserId(userId: number): Observable<number> {
    const url = `${environment.apiUrl}/auth/findMarchandIdByUserId/${userId}`;
    const headers = new HttpHeaders({'Accept': '*/*'});
    return this.http.get<number>(url, { headers });
  }

  getAuthenticatedUserId(): number {
    const token = localStorage.getItem('token');
    if (!token) {
      return 0; // Returns 0 if no token is present
    }
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.id; // Returns the user's ID extracted from the JWT payload
  }

  // Methods to check user roles
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
