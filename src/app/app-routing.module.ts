import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocsViewComponent } from './features/docs-view/docs-view.component';
import { AlphabetInvasionComponent } from './core/alphabet-invasion/alphabet-invasion.component';

const routes: Routes = [
  { path: '', component: DocsViewComponent },
  { path: 'alphabet-invasion', component: AlphabetInvasionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
