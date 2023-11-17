import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmpOutlineComponent } from './gmp-outline.component';

describe('GmpOutlineComponent', () => {
  let component: GmpOutlineComponent;
  let fixture: ComponentFixture<GmpOutlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmpOutlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmpOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
