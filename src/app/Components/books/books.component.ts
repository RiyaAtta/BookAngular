import { Component, OnInit } from '@angular/core';
import { AllBooks } from 'src/app/models/all-books';
import { AllBooksService } from 'src/app/service/all-books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  allBooksList: AllBooks[]=[];

  constructor(public allBookService: AllBooksService) {
    this.allBooksList=allBookService.getBook();
    console.log(this.allBooksList);
   }

  ngOnInit(): void {
  }
  deleteBook(allBooks: AllBooks){
    this.allBookService.removeBook(allBooks);
    this.allBooksList=this.allBookService.getBook();
  }

}

