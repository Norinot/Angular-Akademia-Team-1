import { ActivatedRoute, Router } from '@angular/router';
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
  currentNote!: StickyNote;
  currentId!: number;
  newNote: StickyNote = new StickyNote();

  constructor(fb: FormBuilder, private stickyService: StickyNoteService, private router: Router, private route: ActivatedRoute) {
    this.notesForm = fb.group({
      id: [Number],
      title: [""],
      content: [""]
    });

    this.currentId = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    if (this.currentId == 0) {
      this.currentNote = this.newNote;
    } else {
      this.currentNote = this.stickyService.getNoteById(this.currentId);

      const { id, title, content } = this.currentNote;
      this.notesForm.patchValue({
        id, title, content
      })
    }
  }

  get id(): FormControl {
    return this.notesForm.get('id') as FormControl;
  }

  get title(): FormControl {
    return this.notesForm.get('title') as FormControl;
  }

  get content(): FormControl {
    return this.notesForm.get('content') as FormControl;
  }

  onSubmit() {
    const savedNote: StickyNote = this.notesForm.value as StickyNote;
    if(this.currentId == 0) {
      this.stickyService.addNote(savedNote);
    } else {
      this.stickyService.saveEditedNote(savedNote);
    }
    this.router.navigate(['/dashboard/sticky-notes-container'])
  }

  deleteNote(currentNote: StickyNote) {
    if(currentNote.id !== 0) {
      this.stickyService.deleteNoteById(currentNote);
      this.router.navigate(['/dashboard/sticky-notes-container'])
    }
  }

}
