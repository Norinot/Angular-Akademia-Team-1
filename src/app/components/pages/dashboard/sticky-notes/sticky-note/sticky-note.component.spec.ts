import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from 'src/app/app.module';

import { StickyNoteComponent } from './sticky-note.component';

describe('StickyNoteComponent', () => {
  let component: StickyNoteComponent;
  let fixture: ComponentFixture<StickyNoteComponent>;
  let el: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickyNoteComponent ],
      imports: [AppModule, RouterTestingModule.withRoutes([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(StickyNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add note', () => {
    console.log('lengthBeforeAdd', el.querySelectorAll('#sticky-note-list-item').length);

    component.notes.push({id: 4, title: "Note4", content: "something"});

    fixture.detectChanges();

    expect(el.querySelectorAll('#sticky-note-list-item').length).toBe(4);
  });

  it('should delete a note', () => {
    console.log('lengthBeforeDelete', el.querySelectorAll('#sticky-note-list-item').length);

    const button: HTMLButtonElement = el.querySelector('#sticky-note-delete-button');

    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(el.querySelectorAll('#sticky-note-list-item').length).toBe(2);
  });
});
