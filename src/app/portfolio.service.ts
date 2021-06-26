import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skills } from './skills';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) {
  }

  loadProfileSkills() {
    return this.http.get<Skills[]>('/assets/skills.json');
  }
}
