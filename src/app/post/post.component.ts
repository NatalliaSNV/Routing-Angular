import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post, PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{

    post!: Post;

    constructor(private route: ActivatedRoute, 
                private postsService: PostService,
                private router: Router) {}

    ngOnInit(): void {
        this.route.data.subscribe(data => {
            this.post = data['post'];
        });
    }

    loadFourPost() {
        this.router.navigate(['/posts', 44]);
    }

    loadBackPage(){
       this.router.navigate(['/posts']);
    }
}
