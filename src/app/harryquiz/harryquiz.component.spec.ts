import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarryquizComponent } from './harryquiz.component';

describe('HarryquizComponent', () => {
  let component: HarryquizComponent;
  let fixture: ComponentFixture<HarryquizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HarryquizComponent]
    });
    fixture = TestBed.createComponent(HarryquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
