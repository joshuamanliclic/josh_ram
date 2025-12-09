import { Component, OnInit } from '@angular/core';
import { Skills } from '../../interfaces/profile-skills';
import { PortfolioService } from '../../services/portfolio.service';
import { ActivatedRoute } from '@angular/router';
import { ProfileDetails, ProfileHistory } from '../../interfaces/profile-details';
import { WorkHistoryComponent } from '../work-history/work-history.component';
import { Certificates } from 'src/app/interfaces/certifications';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileDetails!: ProfileDetails;
  listOfPages: string[] = [];

  //skills
  skillset: Skills [] = [];
  //career timeline
  history: ProfileHistory[] = [];
  //certificates
  certifications: Certificates[] = [];

  constructor(
    private portfolioService: PortfolioService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.portfolioService.loadProfileDetails().subscribe(d => {
      this.profileDetails = d;
      this.history = d.history;
    });
    
    this.portfolioService.loadProfileSkills().subscribe(s => {
      this.skillset = s;
    });

    this.listOfPages = this.portfolioService.listOfPages;

    this.portfolioService.loadCertifications().subscribe(c => {
      this.certifications = c;
    });
  }

  nextPage(newPage: string){
    this.portfolioService.nextPage(newPage);
  }
}
