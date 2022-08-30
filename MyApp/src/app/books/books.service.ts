import { Injectable } from '@angular/core';

@Injectable()


export class BooksService {

  constructor() { }

  getBooks(){
    return [
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
    ]
  }
}
