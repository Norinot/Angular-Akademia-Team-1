import { StickyNoteComponent } from './../sticky-note/sticky-note.component';
import { StickyNote } from './../sticky-note.model';
import { StickyNoteService } from './../../../../../services/sticky-note.service';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { StickyNoteContainerComponent } from './sticky-note-container.component';
import { RouterTestingModule } from '@angular/router/testing';


describe('StickyNoteContainerComponent', () => {
  let component: StickyNoteContainerComponent;
  let fixture: ComponentFixture<StickyNoteContainerComponent>;
  let el: any;
  let deb: any;
  let service: StickyNoteService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StickyNoteContainerComponent, StickyNoteComponent],
      imports: [AppModule, RouterTestingModule.withRoutes([])],
    })
      .compileComponents();

    fixture = TestBed.createComponent(StickyNoteContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.nativeElement;
    deb = fixture.debugElement;
    service = new StickyNoteService();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
