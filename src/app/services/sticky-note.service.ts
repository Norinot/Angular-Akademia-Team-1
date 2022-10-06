import { StickyNote } from './../components/pages/dashboard/sticky-notes/sticky-note.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StickyNoteService {

  notes: Array<any> = [];

  constructor() {
    this.notes = [
      {
        id: 1,
        title: 'Note 1',
        content: 'This is the content of note 1',
      },
      {
        id: 2,
        title: 'Note 2',
        content: 'This is the content of note 2',
      },
      {
        id: 3,
        title: 'Note 3',
        content: 'This is the content of note 3',
      },
    ];
  }

  public addNote(note: StickyNote) {
    note.id = this.notes.length + 1;
    this.notes.push(note);
  }

  public getNotes() {
    return this.notes;
  }

  public getNotebyId(id: number) {
    const index = this.notes.findIndex(item => item.id == id);
    return this.notes[index];
  }

  public deleteNote(note: StickyNote) {
    const index = this.notes.findIndex(item => item.id == note.id);
    this.notes.splice(index, 1);

  }
}
