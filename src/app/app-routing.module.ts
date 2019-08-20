import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocsViewComponent } from './features/docs-view/docs-view.component';

const routes: Routes = [
  { path: '', component: DocsViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
