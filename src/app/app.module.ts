import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './core/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DocsViewComponent } from './features/docs-view/docs-view.component';
import { DocsTreeComponent } from './features/docs-tree/docs-tree.component';
import { DocsTreeNodeDetailsComponent } from './features/docs-tree-node-details/docs-tree-node-details.component';
import { AlphabetInvasionComponent } from './core/alphabet-invasion/alphabet-invasion.component';
import { CountdownTimerComponent } from './features/countdown-timer/countdown-timer.component';
import { TrackUserEventsDirective } from './shared/directives/track-user-events.directive';
import { PracticeComponent } from './core/practice/practice.component';
import { HighlightDirective } from './core/highlight.directive';
import { CourseComponent } from './core/practice/course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DocsViewComponent,
    DocsTreeComponent,
    DocsTreeNodeDetailsComponent,
    AlphabetInvasionComponent,
    CountdownTimerComponent,
    TrackUserEventsDirective,
    PracticeComponent,
    HighlightDirective,
    CourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CdkTreeModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
