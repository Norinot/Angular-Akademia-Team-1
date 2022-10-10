import { TestBed } from '@angular/core/testing';

import { StickyNoteService } from './sticky-note.service';

describe('StickyNoteService', () => {
  let service: StickyNoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StickyNoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save changes of a note', () => {
    let notes = service.notes;

    let currentNote = notes[1];

    currentNote.title = 'edited title'

    service.saveEditedNote(currentNote);

    expect(notes[1].title).withContext('Note 2 title should be changed to edited title').toBe('edited title');
  });

  it('should delete a note', () => {
    let notes = service.notes;

    let currentNote = notes[0];

    service.deleteNoteById(currentNote);

    expect(notes.length).withContext('Notes should have only one item').toEqual(2);
  });

  it('should delete all notes', () => {
    let notes = service.notes;

    service.deleteAllNotes();

    expect(notes).withContext('Notes should have zero item').toHaveSize(0);
  });
});
