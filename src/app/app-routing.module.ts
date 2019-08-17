import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocsViewComponent } from './features/docs-view/docs-view.component';
import { DocsTreeComponent } from './features/docs-tree/docs-tree.component';

const routes: Routes = [
  { path: '', component: DocsTreeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
