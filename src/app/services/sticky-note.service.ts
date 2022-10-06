import { StickyNote } from './../components/pages/dashboard/sticky-notes/sticky-note.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StickyNoteService {

  notes: Array<StickyNote> = [];

  constructor() { }

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
