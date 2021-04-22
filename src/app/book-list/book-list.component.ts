import { EventEmitter, Component, Input, OnInit, Output } from '@angular/core';
import { Book } from './book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @Input() books: Array<Book>;
  @Output() add = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

}
