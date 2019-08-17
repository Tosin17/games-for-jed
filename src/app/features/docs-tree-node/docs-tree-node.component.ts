import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-docs-tree-node',
  templateUrl: './docs-tree-node.component.html',
  styleUrls: ['./docs-tree-node.component.scss']
})
export class DocsTreeNodeComponent implements OnInit {
  @Input() model;

  constructor() { }

  ngOnInit() {
    console.log(this.model);
  }

}
