import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsTreeNodeDetailsComponent } from './docs-tree-node-details.component';

describe('DocsTreeNodeDetailsComponent', () => {
  let component: DocsTreeNodeDetailsComponent;
  let fixture: ComponentFixture<DocsTreeNodeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocsTreeNodeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsTreeNodeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
