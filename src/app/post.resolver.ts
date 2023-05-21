import { ActivatedRouteSnapshot, Resolve, Route, RouterStateSnapshot } from "@angular/router";
import { Post, PostService } from "./post.service";
import { Observable, delay, of } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class PostResolver implements Resolve<Post>{

    constructor(private postsService: PostService) {}

    resolve(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): 
        Post | Observable<Post> | Promise<Post> {
            return of(this.postsService.getById(+route.params['id']) as Post)
                    .pipe(delay(1500));
    }

}