import { NgModule } from '@angular/core';
import { PostsRoutingModule } from './posts-routing.module';
import { CommonModule } from '@angular/common';

import { PostsComponent } from './posts.component';

@NgModule({
    declarations: [
        PostsComponent
    ],
    imports: [
        PostsRoutingModule,
        CommonModule
    ],
    providers: [],
    bootstrap: []
})
export class PostsModule { }
