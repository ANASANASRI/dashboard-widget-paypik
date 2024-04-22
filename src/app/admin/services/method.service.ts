import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MethodService {

  private host:string="http://localhost:8085";

  constructor(private http:HttpClient){ }

}
