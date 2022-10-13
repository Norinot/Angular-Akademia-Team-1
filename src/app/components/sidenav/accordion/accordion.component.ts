import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  panelOpenState: boolean = false;
  toggleClass: boolean = false;
  visible: boolean = true;
  @Input() title?: string;
  @Input() text?: string;

  constructor() {
    this.title = 'Title';
    this.text = 'Text';
   }


  ngOnInit(): void {
  }

  isDataPresent(): boolean {
    return this.title !== undefined && this.text !== undefined;
  }
}
