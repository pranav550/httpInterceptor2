import { Book } from './book';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }
  bookUrl = "/api/books";	
  getBooks(): Observable<Book[]> {
      return this.http.get<Book[]>(this.bookUrl);
  }
}
