import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Requirement } from '../models/requirement';

@Injectable({
  providedIn: 'root'
})
export class RequirementService {

  url = 'http://localhost:3000/requirements';

  httpClient = inject(HttpClient);

  constructor() { }

  // () => Observable<Requirement[]>
  list(): Observable<Requirement[]> {
    return this.httpClient
      .get<Requirement[]>(this.url);
  }

  // Requirement => Observable<Requirement>
  add(req: Requirement): Observable<Requirement>{
    return this.httpClient
      .post<Requirement>(this.url, req)
  }
}
