import { Component, OnInit } from '@angular/core';

interface Book {
  name: string,
  author: string,
  image: string
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})

export class BooksComponent implements OnInit {

  books: Book[] = [
    {
      name: "Clean Code",
      author: "Robert C Martin",
      image: "https://m.media-amazon.com/images/I/41xShlnTZTL._AC_UY218_.jpg"
    },
    {
      name: "The Pragmatic Programmer",
      author: " Andrew Hunt",
      image: "https://images-na.ssl-images-amazon.com/images/I/41HXiIojloL._SX396_BO1,204,203,200_.jpg"
  
    }

  ]

  

  isShowing: boolean = true;


  
  constructor() { }

  ngOnInit(): void {
  }

}
