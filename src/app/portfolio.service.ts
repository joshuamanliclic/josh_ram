import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skills } from './profile-skills';
import { Details } from './profile-details';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) {
  }

  loadProfileDetails() {
    return this.http.get<Details>('assets/profile-details.json');
  }

  loadProfileSkills() {
    return this.http.get<Skills[]>('assets/profile-skills.json');
  }
}
