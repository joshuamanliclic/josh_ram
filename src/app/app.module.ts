import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { PortfolioSkillsComponent } from './components/portfolio-skills/portfolio-skills.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { ProfileContactsComponent } from './components/profile-contacts/profile-contacts.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { AgGridModule } from '@ag-grid-community/angular';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectClipComponent } from './components/project-clip/project-clip.component';
import { WorkHistoryComponent } from './components/work-history/work-history.component';

@NgModule({ 
    declarations: [
        AppComponent,
        ProfileComponent,
        PortfolioSkillsComponent,
        ProfileContactsComponent,
        ProjectsComponent,
        ProjectClipComponent,
        WorkHistoryComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatListModule,
        MatIconModule,
        MatGridListModule,
        MatToolbarModule,
        MatTabsModule,
        MatBottomSheetModule,
        ScrollingModule,
        MglTimelineModule,
        AgGridModule], 
    providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { 
}
