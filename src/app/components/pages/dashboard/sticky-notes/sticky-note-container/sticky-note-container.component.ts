import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { StickyNoteService } from 'src/app/services/sticky-note.service';
import { filter } from 'rxjs';
import { StickyNote } from '../sticky-note.model';

@Component({
  selector: 'app-sticky-note-container',
  templateUrl: './sticky-note-container.component.html',
  styleUrls: ['./sticky-note-container.component.scss']
})
export class StickyNoteContainerComponent implements OnInit {

  hiddenBtn: boolean = false;

  constructor(public stickyService: StickyNoteService, private router: Router) {
    router.events.pipe(
      filter(event => event instanceof NavigationStart),
    ).subscribe((event) => {
      if((event as NavigationStart).url.includes('/sticky-note-form/')) {
        this.hiddenBtn = true;
      } else {
        this.hiddenBtn = false;
      }
    });
  }

  ngOnInit(): void {
  }

  deleteAllNotes(): void {
    this.stickyService.deleteAllNotes();
  }

}
