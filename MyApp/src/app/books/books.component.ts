import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})

export class BooksComponent implements OnInit {
  constructor(private booksService: BooksService) {};

  books: Book[] = [];


  cart: Book[] = [];
  isShowing: boolean = true;


  addToCart(value:Book){
    console.log(value);
  }




  ngOnInit(): void {
      this.books=this.booksService.getBooks();
  }

}
