import { Component, HostListener, OnInit } from '@angular/core';
import { SkillDetails, Skills } from '../../interfaces/profile-skills';
import { PortfolioService } from '../../services/portfolio.service';
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
  listOfPages: string[] = [];

  constructor(private portfolioService: PortfolioService ) { }

  ngOnInit(): void {
    this.portfolioService.loadProfileSkills().subscribe(s => {
      this.skillset = s;
    });

    this.listOfPages = this.portfolioService.listOfPages;
  }

  setActive(skillName: string){
    this.skillset.forEach(s => {
      if(s.name === skillName){
        this.activeSkill = s;
      }
    });
  }

  @HostListener('window:keydown', ['$event'])

  handleKeyboardEvent(event: KeyboardEvent) { 
    if(this.activeSkill){
      let skillIndex = 0;
      let scrollContainer = document.getElementById('programming-languages-skills');
      for(let i = 0; i < this.skillset.length; i++){
        if(this.skillset[i] === this.activeSkill){
          skillIndex = i;
        }
      }
      if(event.key === "ArrowLeft"){
        if(skillIndex > 0){
          skillIndex--;
          scrollContainer!.scrollLeft -= 175;
        } 
      }
      else if(event.key === "ArrowRight"){
        if(skillIndex < this.skillset.length - 1){
          skillIndex++;
          scrollContainer!.scrollLeft += 175;
        } 
      }

      this.activeSkill = this.skillset[skillIndex];
      this.setActive(this.skillset[skillIndex].name);
    } else {
      this.activeSkill = this.skillset[0];
      this.setActive(this.skillset[0].name);
    }
  }

  nextPage(newPage: string){
    this.portfolioService.nextPage(newPage);
  }
}
