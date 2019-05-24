import { BookService } from './book.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Book} from "./book";
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books$: Observable<Book[]>
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();	
  }

  getBooks() {
    this.books$ = this.bookService.getBooks();
 }

}
