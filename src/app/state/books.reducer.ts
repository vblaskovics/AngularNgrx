import { createReducer, on, Action } from '@ngrx/store'
import { Book } from '../book-list/book.model';

import { retrievedBookList } from './books.actions';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
    initialState,
    on(retrievedBookList, (state, { Book }) => [...Book])
);