import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';

import { Tweet } from '../tweet/tweet';
import { TwitterService } from '../twitter.service';


@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  tweets: Tweet[];


  constructor(
  private twitterService: TwitterService

  ) { }

  ngOnInit(): void {
    this.twitterService.authorize();
  }

  getTweets(): void {
    this.twitterService.getTweets().then(tweets => this.tweets = tweets);
  }



}
