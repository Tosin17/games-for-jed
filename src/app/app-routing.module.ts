import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorShadesComponent } from './color-shades/color-shades.component';


const routes: Routes = [
  { path: '', component: ColorShadesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
