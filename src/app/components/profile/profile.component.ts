import { Component, OnInit } from '@angular/core';
import { Skills } from '../../interfaces/profile-skills';
import { PortfolioService } from '../../services/portfolio.service';
import { ActivatedRoute } from '@angular/router';
import { ProfileDetails, ProfileHistory } from '../../interfaces/profile-details';
import { WorkHistoryComponent } from '../work-history/work-history.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileDetails!: ProfileDetails;
  listOfPages: string[] = [];
  skillset: Skills [] = [];

  //career timeline
  history: ProfileHistory[] = [];

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
  }

  nextPage(newPage: string){
    this.portfolioService.nextPage(newPage);
  }
}
