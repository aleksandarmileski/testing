import {NgModule} from '@angular/core';
import {DashboardHeroComponent} from './dashboard-hero.component';
import {DashboardComponent} from "./dashboard.component";
import {SharedModule} from "../shared/shared.module";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DashboardComponent,
    DashboardHeroComponent,
  ]
})
export class DashboardModule {
}
