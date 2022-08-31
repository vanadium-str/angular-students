import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStudent } from '../models/model-student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  constructor(private http: HttpClient) {}

  getData(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(`/getData`); 
  }
}