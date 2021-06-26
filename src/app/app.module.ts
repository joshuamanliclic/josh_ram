import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { PortfolioSkillsComponent } from './portfolio-skills/portfolio-skills.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { ProfileContactsComponent } from './profile-contacts/profile-contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PortfolioSkillsComponent,
    ProfileContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    HttpClientModule,
    MatIconModule,
    MatGridListModule,
    MatToolbarModule,
    MatTabsModule,
    MatBottomSheetModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
