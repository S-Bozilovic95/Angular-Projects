import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})

export class BooksComponent implements OnInit {
  name: string = "Clean Code";
  author: string = "Robert C Martin";
  src: string = "https://media.istockphoto.com/vectors/gold-decorative-frame-interwoven-vintage-ornament-flowers-and-leaves-vector-id1027179634?b=1&k=20&m=1027179634&s=170667a&w=0&h=SzKCX3EFBoF3ZAbqmMY0ifPtO55a8LlHULqI_5PCNtY="
  constructor() { }

  ngOnInit(): void {
  }

}
