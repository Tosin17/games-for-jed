import { Component, OnInit } from '@angular/core';
import { docs } from '../../models/docs';

@Component({
  selector: 'app-docs-tree',
  templateUrl: './docs-tree.component.html',
  styleUrls: ['./docs-tree.component.scss']
})
export class DocsTreeComponent implements OnInit {
  // Manage state for the tree
  constructor() { }

  private docs = docs;

  ngOnInit() {
  }

}
