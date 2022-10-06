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

  constructor(fb: FormBuilder, private notesService: StickyNoteService, private router: Router, private route: ActivatedRoute) {
    this.notesForm = fb.group({
      title: [""],
      content: [""]
    });
  }

  ngOnInit(): void {
  }

  get title(): FormControl {
    return this.notesForm.get('note') as FormControl;
  }

  get content(): FormControl {
    return this.notesForm.get('note') as FormControl;
  }

  onSubmit() {
    const savedNote: StickyNote = this.notesForm.value as StickyNote;
    this.notesService.addNote(savedNote);
    // this.router.navigate(['/', 'sticky-notes-container', '/', 'sticky-note']);
  }

}
