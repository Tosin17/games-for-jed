import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsTreeComponent } from './docs-tree.component';

describe('DocsTreeComponent', () => {
  let component: DocsTreeComponent;
  let fixture: ComponentFixture<DocsTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocsTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
