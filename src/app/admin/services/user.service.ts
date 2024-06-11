import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { User } from '../model/user.model';
import { Role } from '../model/role.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  public getUsers():Observable<Array<User>>{
    return this.http.get<Array<User>>(environment.apiUrl + "/auth/users");
  }

  public updateUser(user: User): Observable<User> {
    // Utiliser l'identifiant de l'utilisateur pour former l'URL de mise à jour
    const url = `${environment.apiUrl}/auth/updateprofile/${user.id}`;
    // Envoyer une requête PUT avec les données de l'utilisateur
    return this.http.put<User>(url, user);
  }

  findRoles(username: string): Observable<Role[]> {
    const url = `${environment.apiUrl} /auth/users/roles/${username}`;
    return this.http.get<Role[]>(url);
    
  }
  /*delet*/

  deleteUser(id: number): Observable<void> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete<void>(`${environment.apiUrl}/auth/delete/${id}`, { headers });
  }
  /*Add*/
  // Ajoutez ici la méthode pour ajouter un utilisateur
  public addUser(user: any) {
    return this.http.post('http://localhost:8085/auth/signup', user);
}
  

}
