import { StickyNote } from './../components/pages/dashboard/sticky-notes/sticky-note.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StickyNoteService {
  notes: Array<any> = [];
  valami: boolean = false;
  classes: any[] = [
    {
      AlignClass: 'align-content-flex-start',
      imgUrl: '../../assets/Alignment-icons/align-top.png',
    },
    {
      AlignClass: 'align-content-center',
      imgUrl: '../../assets/Alignment-icons/align-center.png',

    },
    {
      AlignClass: 'align-content-flex-end',
      imgUrl: '../../assets/Alignment-icons/align-bottom.png',

    },
    {
      JustifyClass: 'justify-content-flex-start',
      imgUrl: '../../assets/Alignment-icons/justify-left.svg',

    },
    {
      JustifyClass: 'justify-content-flex-center',
      imgUrl: '../../assets/Alignment-icons/justify-center.png',

    },
    {
      JustifyClass: 'justify-content-flex-end',
      imgUrl: '../../assets/Alignment-icons/justify-right.png',

    },
  ];

  selectedAlignContent: string = '';
  selectedJustifyContent: string = '';

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
    const index = this.notes.findIndex((item) => item.id == id);
    return this.notes[index];
  }

  public deleteNote(note: StickyNote) {
    const index = this.notes.findIndex((item) => item.id == note.id);
    this.notes.splice(index, 1);
  }

  onAddStyling(item: any) {
    if (item.AlignClass) {
      if (item.AlignClass === this.selectedAlignContent) {
        // Ha megyegyezik egy kiválasztott classt
        this.selectedAlignContent = '';
      } else {
        this.selectedAlignContent = item.AlignClass;
      }
    }
    console.log(item.AlignClass);

    if (item.JustifyClass) {
      if (item.JustifyClass === this.selectedJustifyContent) {
        // Ha megyegyezik egy kiválasztott classt
        this.selectedJustifyContent = '';
      } else {
        this.selectedJustifyContent = item.JustifyClass;
      }
    }
  }
}
