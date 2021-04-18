import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DocsViewComponent } from "./features/docs-view/docs-view.component";
import { AlphabetInvasionComponent } from "./core/alphabet-invasion/alphabet-invasion.component";
import { CountdownTimerComponent } from "./features/countdown-timer/countdown-timer.component";
import { LockScreenComponent } from "./core/lock-screen/lock-screen.component";
import { ProgressBarComponent } from "./core/progress-bar/progress-bar.component";
import { SaveIndicatorComponent } from "./core/save-indicator/save-indicator.component";
import { SwipeRefreshComponent } from "./core/swipe-refresh/swipe-refresh.component";
import { StopWatchComponent } from "./core/stop-watch/stop-watch.component";
import { TypeAheadComponent } from "./core/type-ahead/type-ahead.component";

const routes: Routes = [
  { path: "", component: DocsViewComponent },
  { path: "alphabet-invasion", component: AlphabetInvasionComponent },
  { path: "countdown", component: CountdownTimerComponent },
  { path: "lockscreen", component: LockScreenComponent },
  { path: "progress-bar", component: ProgressBarComponent },
  { path: "save-indicator", component: SaveIndicatorComponent },
  { path: "swipe-refresh", component: SwipeRefreshComponent },
  { path: "stop-watch", component: StopWatchComponent },
  { path: "type-ahead", component: TypeAheadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
