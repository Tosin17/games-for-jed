import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorShadesComponent } from './color-shades.component';

describe('ColorShadesComponent', () => {
  let component: ColorShadesComponent;
  let fixture: ComponentFixture<ColorShadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorShadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorShadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
