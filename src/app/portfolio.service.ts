import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skills } from './profile-skills';
import { Details } from './profile-details';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  listOfPages = ['/', 'skills'];

  constructor(private http: HttpClient, private router: Router) {
  }

  nextPage(newPage: string){
    this.router.navigate([newPage]);
  }

  loadProfileDetails() {
    return this.http.get<Details>('assets/profile-details.json');
  }

  loadProfileSkills() {
    return this.http.get<Skills[]>('assets/profile-skills.json');
  }
}
