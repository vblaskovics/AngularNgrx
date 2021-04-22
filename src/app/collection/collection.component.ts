import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../book-list/book.model';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  @Input() books: Array<Book>;
  @Output() remove = new EventEmitter()
  
  constructor() { }

  ngOnInit(): void {
  }

}
