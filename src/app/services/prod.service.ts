import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prod } from '../models/prod';

@Injectable({
  providedIn: 'root'
})
export class ProdService {

  private apiUrl = 'http://localhost:3005/prods'; // Define the API URL

  constructor(private http: HttpClient) { }

  // Method to retrieve all posts
  getPosts(): Observable<Prod[]> {
    return this.http.get<Prod[]>(this.apiUrl);
  }

  // Method to create a new post
  createPost(prod: Prod): Observable<Prod> {
    return this.http.post<Prod>(this.apiUrl, prod);
  }

  // Method to update an existing post
  updatePost(prod: Prod): Observable<Prod> {
    const url = `${this.apiUrl}/${prod.id}`; // Assuming there's an 'id' field in the Prod interface
    return this.http.put<Prod>(url, prod);
  }

  // Method to delete a post
  deletePost(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}

