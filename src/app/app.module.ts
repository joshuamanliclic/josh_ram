import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { PortfolioSkillsComponent } from './components/portfolio-skills/portfolio-skills.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { ProfileContactsComponent } from './components/profile-contacts/profile-contacts.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { AgGridModule } from '@ag-grid-community/angular';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PortfolioSkillsComponent,
    ProfileContactsComponent,
    CertificationsComponent
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
    ScrollingModule,
    MglTimelineModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
