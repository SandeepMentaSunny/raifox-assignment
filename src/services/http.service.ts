import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()

export class HttpService {
    public apiUrl: string = 'https://jsonplaceholder.typicode.com';
    public commentTitle: any;

    constructor(public http: HttpClient) { }

    getPostsOrComments(type) {
        return this.http.get(this.apiUrl + '/' + type).pipe(map(res => res));
    }

    setCommentTitle(title) {
        this.commentTitle = title;
    }

    getCommentTitle() {
        return this.commentTitle;
    }
}