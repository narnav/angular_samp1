import { Component } from '@angular/core';
import { ProdService } from './services/prod.service';
import { Prod } from './models/prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    products: Prod[] = []
    constructor(private prodService: ProdService) {
        prodService.getPosts().subscribe(prods => this.products=prods)
     }
     getAllPosts(): void {
        this.prodService.getPosts().subscribe(prods =>  this.products=prods)
          }
    
      // Method to create a new post
      createNewPost(): void {
        const newPost: Prod = { desc: "New post description", price: 10 }; // Example post data
        this.prodService.createPost(newPost).subscribe(crea =>     this.getAllPosts());
      }
    
      // Method to update an existing post
      updateExistingPost(): void {
        const updatedPost: Prod = { id: 1, desc: "Updated post description", price: 20 }; // Example updated post data
        this.prodService.updatePost(updatedPost)
          .subscribe(updatedPost => {
            console.log('Updated post:', updatedPost); // Handle updated post
          });
      }
    
      // Method to delete a post
      deletePost(postId: number): void {
        this.prodService.deletePost(postId)
          .subscribe(() => {
            console.log('Post deleted successfully'); // Handle successful deletion
          });
      }
    }
