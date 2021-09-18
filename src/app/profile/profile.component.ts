import { Component, OnInit } from '@angular/core';
import { Skills } from '../profile-skills';
import { PortfolioService } from '../portfolio.service';
import { ActivatedRoute } from '@angular/router';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ProfileContactsComponent } from '../profile-contacts/profile-contacts.component';
import { Details } from '../profile-details';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  personalDetails!: Details;

  constructor(private portfolioService: PortfolioService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.portfolioService.loadProfileDetails().subscribe(d => {
      this.personalDetails = d;
    });
  }
}
