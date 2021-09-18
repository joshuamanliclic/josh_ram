import { Component, OnInit } from '@angular/core';
import { SkillDetails, Skills } from '../profile-skills';
import { PortfolioService } from '../portfolio.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ProfileContactsComponent } from '../profile-contacts/profile-contacts.component';

@Component({
  selector: 'app-portfolio-skills',
  templateUrl: './portfolio-skills.component.html',
  styleUrls: ['./portfolio-skills.component.css']
})
export class PortfolioSkillsComponent implements OnInit {
  skillDetailLabel: string = "SKILL DETAILS"
  skillset: Skills [] = [];
  activeSkill!: Skills;

  constructor(private portfolioService: PortfolioService ) { }

  ngOnInit(): void {
    this.portfolioService.loadProfileSkills().subscribe(s => {
      this.skillset = s;
    });
  }

  setActive(skillName: string){
    this.skillset.forEach(s => {
      if(s.name === skillName){
        this.activeSkill = s;
      }
    });
  }
}
