import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './core/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { DocsViewComponent } from './features/docs-view/docs-view.component';
import { DocsTreeComponent } from './features/docs-tree/docs-tree.component';
import { DocsTreeNodeDetailsComponent } from './features/docs-tree-node-details/docs-tree-node-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DocsViewComponent,
    DocsTreeComponent,
    DocsTreeNodeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CdkTreeModule,
    MatTreeModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
