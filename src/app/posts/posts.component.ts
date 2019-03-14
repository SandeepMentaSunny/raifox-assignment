import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { HttpService } from './../../services/http.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public posts: any;

  constructor(public httpService: HttpService, public router: Router) { }

  ngOnInit() {
    this.httpService.getPostsOrComments('posts').subscribe(
      data => {
        this.posts = data || [];
      },
      err => {
        console.log(err);
      }
    )
  }

  showComments(userId, title) {
    let postTitle = {
      "title": title
    };
    this.httpService.setCommentTitle(postTitle);
    this.router.navigateByUrl('/comments/' + userId);
  }

  trackById(index, item) {
    return item.id;
  }
}
