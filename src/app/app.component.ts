import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { PortfolioService } from './portfolio.service';
import { ProfileContactsComponent } from './profile-contacts/profile-contacts.component';
import { ProfileDetails, ProfileHistory } from './profile-details';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title!: string;

  pageTitle: string = "Hello! This is my portfolio";
  iconsArray: string [] = ["attach_money", "info", "engineering", "email"]
  pageIcon: string = this.iconsArray[0];
  listOfPages: string[] = [];
  cardPhotoURL: string = "assets/photos/contact.png";
  email: string = "joshua.manliclic04@gmail.com";
  linkedIn: string = "www.linkedin.com/in/ramses-joshua-manliclic";

  profileDetails!: ProfileDetails;

  constructor(private _bottomSheet: MatBottomSheet, 
    private router: Router, 
    private portfolioService: PortfolioService ) { }

  ngOnInit(): void {
    this.listOfPages = this.portfolioService.listOfPages;

    this.portfolioService.loadProfileDetails().subscribe(d => {
      this.profileDetails = d;  
    });
  }

  openLink(): void {
    //this._bottomSheet.open( ProfileContactsComponent );
  }

  goToLinkedIn() {
    window.location.href = this.linkedIn;
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
