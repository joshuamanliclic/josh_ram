import { Component, OnInit } from '@angular/core';
import { Skills } from '../skills';
import { PortfolioService } from '../portfolio.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ProfileContactsComponent } from '../profile-contacts/profile-contacts.component';

@Component({
  selector: 'app-portfolio-skills',
  templateUrl: './portfolio-skills.component.html',
  styleUrls: ['./portfolio-skills.component.css']
})
export class PortfolioSkillsComponent implements OnInit {
  skillset: Skills [] = [];

  constructor(private portfolioService: PortfolioService, private _bottomSheet: MatBottomSheet,) { }

  ngOnInit(): void {
    this.portfolioService.loadProfileSkills().subscribe(s => {
      this.skillset = s,
      s.forEach(sk => {
        sk.languages.forEach(l => {
          console.log(l.name);
        })
      })
    });
  }

  openLink(): void {
    this._bottomSheet.open(ProfileContactsComponent);
  }
}
