import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AllBooks } from 'src/app/models/all-books';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {

  @Input()
  allBooks: AllBooks=new AllBooks();

  @Output()
  removed=new EventEmitter<AllBooks>();

  constructor() { }

  ngOnInit(): void {
  }
  delete(){
    this.removed.emit(this.allBooks);
  }

}
