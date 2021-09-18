import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
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

  constructor(private _bottomSheet: MatBottomSheet, private router: Router) { }

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
