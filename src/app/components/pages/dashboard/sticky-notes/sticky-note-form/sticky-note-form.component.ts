import { StickyNote } from './../sticky-note.model';
import { StickyNoteService } from './../../../../../services/sticky-note.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sticky-note-form',
  templateUrl: './sticky-note-form.component.html',
  styleUrls: ['./sticky-note-form.component.scss']
})
export class StickyNoteFormComponent implements OnInit {

  notesForm: FormGroup;

  constructor(fb: FormBuilder, private notesService: StickyNoteService) {
    this.notesForm = fb.group({
      note: [""]
    });
  }

  ngOnInit(): void {
  }

  get note(): FormControl {
    return this.notesForm.get('note') as FormControl;
  }

  onSubmit() {
    const savedNote: StickyNote = this.notesForm.value as StickyNote;
    this.notesService.addNote(savedNote) ;
  }

}
