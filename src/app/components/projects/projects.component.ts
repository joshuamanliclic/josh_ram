import { Component } from '@angular/core';
import { Projects } from 'src/app/interfaces/project-list';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  listOfProjects: Projects[] = [];

  constructor(
    private portfolioService: PortfolioService, 
  ) { }

  ngOnInit(): void {
    this.portfolioService.loadProjects().subscribe((p) => this.listOfProjects = p);
  }
}
