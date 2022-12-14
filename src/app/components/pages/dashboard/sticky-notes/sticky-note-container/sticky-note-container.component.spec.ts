import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { StickyNoteContainerComponent } from './sticky-note-container.component';

describe('StickyNoteContainerComponent', () => {
  let component: StickyNoteContainerComponent;
  let fixture: ComponentFixture<StickyNoteContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickyNoteContainerComponent ],
      imports: [AppModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StickyNoteContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
