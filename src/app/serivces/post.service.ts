import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { post } from '../posts/post.model';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl: string;

  postUrl: 'https://sarti-blog-default-rtdb.firebaseio.com/post.json';

  constructor(private http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
    this.baseUrl = baseUrl ? baseUrl : '';
  }

  getPosts_1(): Observable<Array<post>> {
    return this.http.get<Array<post>>('https://sarti-blog-default-rtdb.firebaseio.com/post.json');
  }

  getPosts_2(): Observable<Array<post>> {
    let url = this.baseUrl + '/posts';
    return this.http.get<Array<post>>(url);
  }

  getPost(id: number): Observable<post> {
    let url = `${this.baseUrl}/posts/${id}`;
    return this.http.get<post>(url);
  }

  addPost(post: post): Observable<Object> {
    let url = this.baseUrl + '/posts';

    let options = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Accept': 'application/json'
      })
    };

    return this.http.post(url, JSON.stringify(post), options);
  }
}
