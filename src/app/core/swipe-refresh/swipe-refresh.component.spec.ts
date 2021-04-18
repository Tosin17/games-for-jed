import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipeRefreshComponent } from './swipe-refresh.component';

describe('SwipeRefreshComponent', () => {
  let component: SwipeRefreshComponent;
  let fixture: ComponentFixture<SwipeRefreshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwipeRefreshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwipeRefreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
