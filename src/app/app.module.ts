import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MainCardComponent } from './main-card/main-card.component';
import { NewArticlesCardComponent } from './new-articles-card/new-articles-card.component';
import { TrendingSectionComponent } from './trending-section/trending-section.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MainCardComponent,
    NewArticlesCardComponent,
    TrendingSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
