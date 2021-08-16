import { Injectable } from '@angular/core';
import { Mockdata } from "../models/mock-all-books-data";
import { AllBooks } from "../models/all-books";

@Injectable({
  providedIn: 'root'
})

export class AllBooksService {
  addBook(book: AllBooks){
    this.allBooks.push(book);
  }
  allBooks:AllBooks[];

  constructor() {
    this.allBooks=Mockdata.AllBooks;
   }

   getBook():AllBooks[]{
    return this.allBooks;
   }

   removeBook(allBooks:AllBooks){
     let index=this.allBooks.indexOf(allBooks);
     if(index!=-1){
       this.allBooks.splice(index,1);
     }
   }
}

