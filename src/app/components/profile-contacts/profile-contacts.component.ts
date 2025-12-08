import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-contacts',
  templateUrl: './profile-contacts.component.html',
  styleUrls: ['./profile-contacts.component.css']
})
export class ProfileContactsComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<ProfileContactsComponent>, 
    private router: Router) {}

  ngOnInit(): void {
    
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  nextPage(newPage: string){
    this.router.navigate([newPage]);
  }
}
