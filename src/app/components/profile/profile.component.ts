import { Component, OnInit } from '@angular/core';
import { Skills } from '../../interfaces/profile-skills';
import { PortfolioService } from '../../services/portfolio.service';
import { ActivatedRoute } from '@angular/router';
import { ProfileDetails, ProfileHistory } from '../../interfaces/profile-details';

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
  alternate: boolean = true;
  toggle: boolean = true;
  color: boolean = false;
  size: number = 60;
  expandEnabled: boolean = true;
  contentAnimation: boolean = true;
  dotAnimation: boolean = true;
  side = 'left';
  entries: ProfileHistory[] = [];

  constructor(
    private portfolioService: PortfolioService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.portfolioService.loadProfileDetails().subscribe(d => {
      this.profileDetails = d;
      this.entries = d.history;
    });
    
    this.portfolioService.loadProfileSkills().subscribe(s => {
      this.skillset = s;
    });

    this.listOfPages = this.portfolioService.listOfPages;
  }

  nextPage(newPage: string){
    this.portfolioService.nextPage(newPage);
  }

  addEntry() {

  }

  removeEntry() {
    this.entries.pop();
  }

  onHeaderClick(event: any) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  onDotClick(event: any) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  onExpandEntry(expanded: any, index: any) {
    console.log(`Expand status of entry #${index} changed to ${expanded}`)
  }

  toggleSide() {
    this.side = this.side === 'left' ? 'right' : 'left';
  }
}
