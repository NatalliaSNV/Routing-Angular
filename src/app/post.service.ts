import { Injectable } from "@angular/core";

export interface Post {
    title: string,
    text: string,
    id: number
}

@Injectable({
    providedIn: 'root'
})
export class PostService {
    posts: Post[] = [
        {title: 'Post 1', text: 'interesting text', id: 11},
        {title: 'Post 2', text: 'important text', id: 22},
        {title: 'Post 3', text: 'boring text', id: 33},
        {title: 'Post 4', text: 'funny text', id: 44},
    ]

    getById(id: number){
        return this.posts.find((item) => item.id === id);
    }
}