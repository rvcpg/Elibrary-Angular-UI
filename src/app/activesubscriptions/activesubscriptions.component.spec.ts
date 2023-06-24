import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivesubscriptionsComponent } from './activesubscriptions.component';

describe('ActivesubscriptionsComponent', () => {
  let component: ActivesubscriptionsComponent;
  let fixture: ComponentFixture<ActivesubscriptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivesubscriptionsComponent]
    });
    fixture = TestBed.createComponent(ActivesubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
