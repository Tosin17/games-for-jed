import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './core/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DocsViewComponent } from './features/docs-view/docs-view.component';
import { DocsTreeComponent } from './features/docs-tree/docs-tree.component';
import { DocsTreeNodeComponent } from './features/docs-tree-node/docs-tree-node.component';
import { DocsTreeNodeDetailsComponent } from './features/docs-tree-node-details/docs-tree-node-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DocsViewComponent,
    DocsTreeComponent,
    DocsTreeNodeComponent,
    DocsTreeNodeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
