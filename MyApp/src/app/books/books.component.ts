import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})

export class BooksComponent implements OnInit {

  books: Book[] = [
    {
      name: "Clean Code",
      author: "Robert C. Martin",
      image: "https://m.media-amazon.com/images/I/41xShlnTZTL._AC_UY218_.jpg",
      amount: 110.55,
    },
    {
      name: "The Pragmatic Programmer",
      author: " Andrew Hunt",
      image: "https://images-na.ssl-images-amazon.com/images/I/41HXiIojloL._SX396_BO1,204,203,200_.jpg",
      amount: 80.44,
    },
    {
      name: "The Art of Computer Programming",
      author: "Donald E. Knuth",
      image: "https://images-na.ssl-images-amazon.com/images/I/41msKv2oN9L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
      amount: 65.12,
    },
    {
      name: "You Don't Know JS Yet: Get Started",
      author: "Kyle Simpson",
      image: "https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
      amount: 24.74,
    },
  ];


  cart: Book[] = [];
  isShowing: boolean = true;


  addToCart(value:Book){
    console.log(value);
  }


  
  constructor() { }

  ngOnInit(): void {
  }

}
