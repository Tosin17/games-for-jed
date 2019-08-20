export interface FoodNode {
    name: string;
    isExpanded?: boolean;
    children?: FoodNode[];
    properties?: any;
    __inheritedProperties?: any;
}

export const TREE_DATA: FoodNode[] = [
    {
        name: 'Fruit',
        isExpanded: false,
        properties: [
            { name: 'Attr 1' },
            { name: 'Attr 2' }
        ],
        children: [
            { name: 'Apple' },
            { name: 'Banana' },
            { name: 'Fruit loops' },
        ]
    }, {
        name: 'Vegetables',
        isExpanded: false,
        children: [
            {
                name: 'Green',
                __inheritedProperties: [
                    { name: 'Attr 1' },
                    { name: 'Attr 2' }
                ],
                children: [
                    { name: 'Broccoli' },
                    { name: 'Brussel sprouts' },
                ]
            }, {
                name: 'Orange',
                children: [
                    {
                        name: 'Pumpkins',
                        properties: [
                            { name: 'Attr 1' },
                            { name: 'Attr 2' }
                        ]
                    },
                    { name: 'Carrots' },
                ]
            },
        ]
    },
];

export const removeDeep = (obj, name = '') => {
    for (const k in obj) {
        if (obj[k] && typeof obj[k] === 'object') {
            if (obj[k].name === name) {
                obj.splice(obj.indexOf(obj[k]), 1);
            }
            removeDeep(obj[k], name);
        }
    }
};

export const expandAll = (obj) => {
    for (const k in obj) {
        if (obj[k] && typeof obj[k] === 'object') {
            obj.isExpanded = true;
            expandAll(obj[k]);
        }
    }
};

export const collapseAll = (obj) => {
    for (const k in obj) {
        if (obj[k] && typeof obj[k] === 'object') {
            obj.isExpanded = false;
            collapseAll(obj[k]);
        }
    }
};
