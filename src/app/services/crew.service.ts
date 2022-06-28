import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Crewman } from '../Crewman';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class CrewService {
  private apiUrl = 'http://localhost:3000/crewmen';

  constructor(private http:HttpClient) { }

  getCrewmen(): Observable<Crewman[]> {
    return this.http.get<Crewman[]>(this.apiUrl);
  }

  addCrewman(crewman: Crewman):Observable<Crewman> {
    return this.http.post<Crewman>(this.apiUrl, crewman, httpOptions)
  }
}
