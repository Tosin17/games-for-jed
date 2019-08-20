import { Component, OnInit } from '@angular/core';
import { docs } from '../../models/docs';

@Component({
  selector: 'docs-view',
  templateUrl: './docs-view.component.html',
  styleUrls: ['./docs-view.component.scss']
})
export class DocsViewComponent implements OnInit {
  // Manage state for the tree
  constructor() { }

  private docs = docs;

  ngOnInit() {
  }

}
