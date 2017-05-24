import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

import { Tweet } from './tweet/tweet';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';


@Injectable()
export class TwitterService {

  constructor(private http: Http) { }
  private twitterUrl = 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=realDonaldTrump&count=20';
  private encodedConsumerKeySecret = btoa("H0XY1IwEVdoAzZvSRyMmWWYhR:XlsMILpe6XonOWEQ9RE8GuzPLoCMJJWFTXvKJsxWj96oW2T74G");

  getTweets(): Promise<Tweet[]> {

    return this.http.get(this.twitterUrl)
    .toPromise()
    .then(response => response.json().data as Tweet)
     .catch(this.handleError);
  }

   handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

   authorize(){
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    this.http.post('https://api.twitter.com/oauth2/token', {form: {'grant_type': 'client_credentials'},
    headers: headers}).subscribe((res) => {
      console.log(res);
    })
  }

   createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('username:password'));
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
  }

}
