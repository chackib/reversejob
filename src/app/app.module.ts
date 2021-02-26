import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';

import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
import { CotationComponent } from './components/cotation/cotation.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ParrainageComponent } from './components/parrainage/parrainage.component';
import { MonCompteComponent } from './components/mon-compte/mon-compte.component';
import { MainComponent } from './components/main/main.component';
import { CardOneComponent } from './components/card/card-one/card-one.component';
import { TimelineContainerComponent } from './components/timeline-container/timeline-container.component';
import { ProfileExperienceDialogComponent } from './components/profile-experience-dialog/profile-experience-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavbarComponent,
    CotationComponent,
    ProfileComponent,
    ParrainageComponent,
    MonCompteComponent,
    MainComponent,
    CardOneComponent,
    TimelineContainerComponent,
    ProfileExperienceDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
