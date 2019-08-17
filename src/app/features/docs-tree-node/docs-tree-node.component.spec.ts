import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsTreeNodeComponent } from './docs-tree-node.component';

describe('DocsTreeNodeComponent', () => {
  let component: DocsTreeNodeComponent;
  let fixture: ComponentFixture<DocsTreeNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocsTreeNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsTreeNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
