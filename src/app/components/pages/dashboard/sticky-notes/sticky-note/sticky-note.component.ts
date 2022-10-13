import { StickyNote } from './../sticky-note.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StickyNoteService } from 'src/app/services/sticky-note.service';

@Component({
  selector: 'app-sticky-note',
  templateUrl: './sticky-note.component.html',
  styleUrls: ['./sticky-note.component.scss']
})
export class StickyNoteComponent implements OnInit {

  constructor(public stickyService: StickyNoteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  deleteNote(note: StickyNote): void {
    this.stickyService.deleteNoteById(note);
  }

}
