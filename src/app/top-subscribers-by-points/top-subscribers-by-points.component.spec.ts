import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSubscribersByPointsComponent } from './top-subscribers-by-points.component';

describe('TopSubscribersByPointsComponent', () => {
  let component: TopSubscribersByPointsComponent;
  let fixture: ComponentFixture<TopSubscribersByPointsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopSubscribersByPointsComponent]
    });
    fixture = TestBed.createComponent(TopSubscribersByPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
