import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionCardComponent } from './question-card/question-card.component';
import { AnswersCardComponent } from './answers-card/answers-card.component';
import { ResultCardComponent } from './result-card/result-card.component';
import { TitleCardComponent } from './title-card/title-card.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionCardComponent,
    AnswersCardComponent,
    ResultCardComponent,
    TitleCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
