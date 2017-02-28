import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HighlightDirective} from './highlight.directive';
import {TitleCasePipe} from './title-case.pipe';
import {TwainComponent} from "./twain/twain.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [CommonModule],
  exports: [CommonModule,
    FormsModule,
    HighlightDirective,
    TitleCasePipe,
    TwainComponent
  ],
  declarations: [
    HighlightDirective,
    TitleCasePipe,
    TwainComponent
  ]
})
export class SharedModule {
}
