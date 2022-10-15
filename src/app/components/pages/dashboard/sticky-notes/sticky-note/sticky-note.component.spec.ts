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
    const lengthBefore = component.notes.length;

    component.notes.push({id: 444, title: "Note444", content: "something"});

    fixture.detectChanges();

    expect(el.querySelectorAll('#sticky-note-list-item').length).withContext('Note items must be more by one than before').toBe(lengthBefore + 1);
  });

  it('should delete a note', () => {
    const lengthBefore = component.notes.length;
    const button: HTMLButtonElement = el.querySelector('#sticky-note-delete-button');

    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(el.querySelectorAll('#sticky-note-list-item').length).withContext('Note items must be less by one than before').toBe(lengthBefore - 1);
  });
});
