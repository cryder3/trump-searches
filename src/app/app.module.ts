import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TweetsComponent } from './tweets/tweets.component';
import { TwitterService } from './twitter.service';
import { Tweet } from './tweet/tweet';

@NgModule({
  declarations: [
    AppComponent,
    TweetsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ TwitterService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
