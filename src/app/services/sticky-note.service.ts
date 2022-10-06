import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StickyNoteService {
  notes: any[];

  constructor() {
    this.notes = [
      {
        title: 'Note 1',
        content: 'This is the content of note 1',
      },
      {
        title: 'Note 2',
        content: 'This is the content of note 2',
      },
      {
        title: 'Note 3',
        content: 'This is the content of note 3',
      },
    ];
  }
}
