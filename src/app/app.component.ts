import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { PortfolioService } from './portfolio.service';
import { ProfileContactsComponent } from './profile-contacts/profile-contacts.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Portfolio";
  iconsArray: string [] = ["attach_money", "account_box", "settings", "email"]
  pageIcon: string = this.iconsArray[0];
  listOfPages: string[] = [];

  constructor(private _bottomSheet: MatBottomSheet, 
    private router: Router, 
    private portfolioService: PortfolioService ) { }

  ngOnInit(): void {
    this.listOfPages = this.portfolioService.listOfPages;
  }

  openLink(): void {
    this._bottomSheet.open( ProfileContactsComponent );
  }

  nextPage(newPage: string){
    switch(newPage){
      case '/':
        this.pageIcon = this.iconsArray[1];
        break;
      case '/skills':
        this.pageIcon = this.iconsArray[2];
        break;
      default:
        this.pageIcon = this.iconsArray[0];
        break;
    }

    this.router.navigate([newPage]);
  }
}
