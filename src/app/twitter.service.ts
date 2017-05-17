import { Injectable } from '@angular/core';
import {  Headers, Http, Response} from '@angular/http';

import { Tweet } from './tweet/tweet';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class TwitterService {

private twitterUrl = 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=realDonaldTrump&count=20';
private base64hash = btoa('H0XY1IwEVdoAzZvSRyMmWWYhR:XlsMILpe6XonOWEQ9RE8GuzPLoCMJJWFTXvKJsxWj96oW2T74G');


private headers = new Headers({'ContentType':'application/x-www-form-urlencoded;charset=UTF-8'},
                              {'Authorization': this.base64hash});

  constructor(private http: Http) { }


  getTweets(tweets: Tweet[]) {
    this.http.get(this.twitterUrl)
    .map(this.extractData)
  }

  private extractData(res: Response) {
    return res.json();
  }

  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }

    private authorizeForTwitter(){
      const url = `https://api.twitter.com/oauth2/token`;
      const body = `grant_type=client_credentials`;
        return this.http.post(url, body, this.headers)
          .map(res => {return res.json()})
          .catch(this.handleError);

    }
}
