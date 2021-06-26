import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-profile-contacts',
  templateUrl: './profile-contacts.component.html',
  styleUrls: ['./profile-contacts.component.css']
})
export class ProfileContactsComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<ProfileContactsComponent>) {}

  ngOnInit(): void {
    
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
