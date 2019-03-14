import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpService } from './../../services/http.service';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  public comments: any = [];
  postTitle: any;
  page: number = 1;

  constructor(public route: ActivatedRoute, public httpService: HttpService) { }

  ngOnInit() {
    this.getComments();
    this.postTitle = this.httpService.getCommentTitle();
  }
  getComments() {
    let id = this.route.snapshot.paramMap.get('id');
    let param = `posts/${id}/comments`;
    this.httpService.getPostsOrComments(param).subscribe(
      data => {
        if (data) {
          let comments: any = data || [];
          comments.forEach(comment => {
            this.comments.push(comment);
          })
        }
      },
      err => {
        console.log(err);
      })
  }
}
