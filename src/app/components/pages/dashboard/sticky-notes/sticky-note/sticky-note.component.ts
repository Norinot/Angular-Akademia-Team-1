import { Component, OnInit } from '@angular/core';
import { StickyNoteService } from 'src/app/services/sticky-note.service';

@Component({
  selector: 'app-sticky-note',
  templateUrl: './sticky-note.component.html',
  styleUrls: ['./sticky-note.component.scss']
})
export class StickyNoteComponent implements OnInit {

  constructor(public stickyService: StickyNoteService) { }

  ngOnInit(): void {
  }

}
