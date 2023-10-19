import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import PsychologistCreateDTO from '../interfaces/PsychologistCreateDTO';
import PsychologistDTO from '../interfaces/PsychologistDTO';
import PsychologistGetDTO from '../interfaces/PsychologistGetDTO';

@Injectable({
  providedIn: 'root'
})
export class PsychologistService {
  private readonly baseUrl = `${environment.apiUrl}/psychologist`;

  constructor(private http: HttpClient) { }

  create(psychologistCreateDTO: PsychologistCreateDTO): Observable<PsychologistDTO> {
    return this.http.post<PsychologistDTO>(`${this.baseUrl}`, psychologistCreateDTO);
  }

  updateById(id: number, updatingPsychologist: PsychologistDTO): Observable<PsychologistDTO> {
    return this.http.put<PsychologistDTO>(`${this.baseUrl}/${id}`, updatingPsychologist);
  }

  findById(id: number): Observable<PsychologistGetDTO> {
    return this.http.get<PsychologistGetDTO>(`${this.baseUrl}/${id}`);
  }

  listAll(): Observable<PsychologistGetDTO[]> {
    return this.http.get<PsychologistGetDTO[]>(`${this.baseUrl}`);
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
