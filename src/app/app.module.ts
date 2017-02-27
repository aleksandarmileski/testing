import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {BannerComponent} from './banner-inline/banner-inline.component';
import {UserService} from "./user.service";
import { TwainComponent } from './shared/twain/twain.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    TwainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
