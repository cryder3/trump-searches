import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

import { Tweet } from './tweet/tweet';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class TwitterService {

  constructor(private http: Http) { }
  private twitterUrl = 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=realDonaldTrump&count=20';

  getTweets(tweets: Tweet[]) {
    this.http.get(this.twitterUrl)
    .map(this.extractData)
  }

  private extractData(res: Response) {
    return res.json();
  }

  private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
                   error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
      return Observable.throw(errMsg);
    }
}
