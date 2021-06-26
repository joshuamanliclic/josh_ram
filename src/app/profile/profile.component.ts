import { Component, OnInit } from '@angular/core';
import { Skills } from '../skills';
import { PortfolioService } from '../portfolio.service';
import { ActivatedRoute } from '@angular/router';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ProfileContactsComponent } from '../profile-contacts/profile-contacts.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private portfolioService: PortfolioService, private route: ActivatedRoute, private _bottomSheet: MatBottomSheet,) { }

  ngOnInit(): void {
    
  }

  openLink(): void {
    this._bottomSheet.open(ProfileContactsComponent);
  }
}
