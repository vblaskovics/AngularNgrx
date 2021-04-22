import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BooksService } from './book-list/books.service';
import { addBook, removeBook, retrievedBookList } from './state/books.actions';
import { selectBookCollection, selectBooks } from './state/books.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularNgrx';
  books$ = this.store.pipe(select(selectBooks));
  bookCollection$ = this.store.pipe(select(selectBookCollection));

  constructor(private bookService: BooksService, private store: Store) {}

  onAdd(bookId) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId) {
    this.store.dispatch(removeBook({ bookId }));
  }

  ngOnInit() {
    this.bookService.getBook()
      .subscribe((Book) => this.store.dispatch(retrievedBookList({ Book })));
  }
}
