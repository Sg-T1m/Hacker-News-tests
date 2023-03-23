import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INews } from '../interfase/INews';
@Injectable({
  providedIn: 'root',
})
export class GetDannieService {
  static getDataNews(arg0: string, arg1: string) {
    throw new Error('Method not implemented.');
  }
  static subscribe: any;
  static getDataNewsList: any;
  constructor(private http: HttpClient) {}
  getDataNewsList(url: string, limit: string): Observable<string> {
    return this.http.get<string>(
      `https://hacker-news.firebaseio.com/v0/${url}.json?print=pretty&orderBy="$key"&limitToFirst=${limit}`,
      {
        params: new HttpParams()
      }
    );
  }
  getDataNews(id: string): Observable<INews> {
    return this.http.get<INews>(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`,
      {
        params: new HttpParams()
      }
    );
  }
}
