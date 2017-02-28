import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BannerComponent} from './banner-inline/banner-inline.component';
import {UserService} from "./model/user.service";
import {SharedModule} from "./shared/shared.module";
import {WelcomeComponent} from './welcome/welcome.component';
import {AboutComponent} from './about/about.component';
import {TwainService} from "./shared/twain.service";
import {HeroService} from "./model/hero.service";
import {AppRoutingModule} from "./app-routing.module";
import {DashboardModule} from "./dashboard/dashboard.module";

@NgModule({
  imports: [
    BrowserModule,
    DashboardModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    HeroService,
    TwainService,
    UserService],
  declarations: [
    AppComponent,
    AboutComponent,
    BannerComponent,
    WelcomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
