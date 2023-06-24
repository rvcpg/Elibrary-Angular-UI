import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksSubscribedComponent } from './books-subscribed.component';

describe('BooksSubscribedComponent', () => {
  let component: BooksSubscribedComponent;
  let fixture: ComponentFixture<BooksSubscribedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BooksSubscribedComponent]
    });
    fixture = TestBed.createComponent(BooksSubscribedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
