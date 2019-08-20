import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, Injectable } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { cloneDeep } from 'lodash';
import { BehaviorSubject } from 'rxjs';
import { expandAll, collapseAll, TREE_DATA, removeDeep } from './models';

@Injectable()
export class DService {
    dataChange = new BehaviorSubject([]);

    get data() { return this.dataChange.value; }

    constructor() {
        this.initialize();
    }

    initialize() {
        const data = TREE_DATA;
        this.dataChange.next(data);
    }

    expandAll() {
        expandAll(this.data);
    }

    collapseAll() {
        collapseAll(this.data);
    }

    insertItem(node) {
        if (node.children) {
            node.children.push({
                name: 'Almonds',
                isExpanded: false,
                children: [
                    { name: 'Apple' },
                    { name: 'Banana' },
                    { name: 'Fruit loops' },
                ]
            });
            this.dataChange.next(cloneDeep(this.data));
        } else {
            node.children = [];
            node.children.push({
                name: 'Almonds',
                isExpanded: false
            });
            this.dataChange.next(cloneDeep(this.data));
        }
    }

    removeItem(node) {
        // _.remove(this.data, item => item.name === node.name);
        removeDeep(this.data, node.name);
        this.dataChange.next(cloneDeep(this.data));
    }
}
