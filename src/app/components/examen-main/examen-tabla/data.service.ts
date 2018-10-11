import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { USERS } from './data';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor() { }

  getUsers(): Observable<any[]>{
    return of(USERS);
  }

  getColumns(): string[]{
    return ["nombre", "apellido", "edad", "profesión"];
  }
}  

