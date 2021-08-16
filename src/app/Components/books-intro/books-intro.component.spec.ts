import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksIntroComponent } from './books-intro.component';

describe('BooksIntroComponent', () => {
  let component: BooksIntroComponent;
  let fixture: ComponentFixture<BooksIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
