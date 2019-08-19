import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { INode } from '../../models/docs';
import { get } from 'lodash';

@Component({
  selector: 'app-docs-tree-node',
  templateUrl: './docs-tree-node.component.html',
  styleUrls: ['./docs-tree-node.component.scss']
})
export class DocsTreeNodeComponent implements OnInit, OnChanges {
  @Input() nodeData: INode;
  private hasChildren: boolean;
  private showChildren: boolean;

  constructor() { }

  ngOnInit() {
    // if (this.nodeData.ChildNodes.length) {
    // }
  }

  ngOnChanges() {
    this.hasChildren = !!get(this.nodeData, 'ChildNodes.length');
  }

  trackByFn(index, node) {
    return get(node, 'node.Name') || null;
  }

  nodeSelected(evt, node) {
    evt.stopPropagation();
    // console.log(node);
    if (node.ChildNodes.length) {
      this.showChildren = !this.showChildren;
    }
  }
}
