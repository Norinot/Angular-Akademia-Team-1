import { Component, OnInit } from '@angular/core';
import { StickyNoteService } from 'src/app/services/sticky-note.service';

@Component({
  selector: 'app-sticky-note-container',
  templateUrl: './sticky-note-container.component.html',
  styleUrls: ['./sticky-note-container.component.scss']
})
export class StickyNoteContainerComponent implements OnInit {

  constructor(public stickyService: StickyNoteService) { }

  ngOnInit(): void {
  }

}
