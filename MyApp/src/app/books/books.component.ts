import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})

export class BooksComponent implements OnInit {
  name: string = "Clean Code";
  author: string = "Robert C Martin";
  src: string = "https://m.media-amazon.com/images/I/41xShlnTZTL._AC_UY218_.jpg"
  
  name2: string = "The Pragmatic Programmer";
  author2: string = " Andrew Hunt";
  src2: string = "https://images-na.ssl-images-amazon.com/images/I/41HXiIojloL._SX396_BO1,204,203,200_.jpg"
  
  isDisabled: boolean = false;

  handleClick(){
    console.log("radi");
  }

  myName :string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
