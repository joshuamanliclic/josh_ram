import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Projects } from 'src/app/interfaces/project-list';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  listOfVideoProjects: Projects[] = [];
  listOfWebProjects: Projects[] = [];

  constructor(
    private portfolioService: PortfolioService, 
  ) { }

  ngOnInit(): void {
    this.portfolioService.loadProjects().pipe(map((project) => {
      project.forEach(p => {
        if(p.type == "video"){
          this.listOfVideoProjects.push(p);
        }
        if(p.type == "page"){
          this.listOfWebProjects.push(p);
        }
      })
    })).subscribe();
  }
}
