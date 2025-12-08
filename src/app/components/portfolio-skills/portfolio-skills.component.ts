import { Component, Input } from '@angular/core';
import { Skills } from '../../interfaces/profile-skills';

@Component({
  selector: 'app-portfolio-skills',
  templateUrl: './portfolio-skills.component.html',
  styleUrls: ['./portfolio-skills.component.css']
})
export class PortfolioSkillsComponent {
  @Input() skillset: Skills [] = [];
}
