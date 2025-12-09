import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skills } from '../interfaces/profile-skills';
import { ProfileDetails, ProfileHistory } from '../interfaces/profile-details';
import { Router } from '@angular/router';
import { Projects } from '../interfaces/project-list';
import { Certificates } from '../interfaces/certifications';

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
    return this.http.get<ProfileDetails>('assets/profile-details.json');
  }

  loadProfileSkills() {
    return this.http.get<Skills[]>('assets/profile-skills.json');
  }

  loadProjects() {
    return this.http.get<Projects[]>('assets/project-list.json');
  }

  loadCertifications() {
    return this.http.get<Certificates[]>('assets/certifications.json');
  }
}
