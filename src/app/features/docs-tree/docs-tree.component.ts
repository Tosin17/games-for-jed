import { Component } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { DataService } from '../DataService';
import { FoodNode } from '../utils';

@Component({
  selector: 'docs-tree',
  templateUrl: './docs-tree.component.html',
  styleUrls: ['./docs-tree.component.scss']
})

export class DocsTreeComponent {
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();
  hasChild = (_: number, node: FoodNode) => node.children && node.children.length > 0;
  private getChildren = (node: FoodNode) => node.children;

  constructor(private dataService: DataService) {
    this.dataService.dataChange.subscribe(treeData => {
      this.dataSource.data = treeData;
      this.treeControl.dataNodes = treeData;
    });
  }

  addChild(node) {
    this.dataService.insertItem(node);
  }

  removeChild(node) {
    this.dataService.removeItem(node);
    console.log(this.dataSource.data);
  }

  expandAll() {
    this.dataService.expandAll();
  }

  collapseAll() {
    this.dataService.collapseAll();
  }
}
