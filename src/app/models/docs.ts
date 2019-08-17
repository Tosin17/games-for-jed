
/* tslint:disable */
export const docs = {
    "Id": 1,
    "Name": "initialDocument",
    "Description": "This is an out-of-the-box initial document.",
    "Properties": [],
    "ChildNodes": [
        {
            "Id": 0,
            "Name": "New Document Type_1",
            "Description": "",
            "Properties": [],
            "ChildNodes": [
                {
                    "Id": 0,
                    "Name": "New Document Type_9",
                    "Description": "",
                    "Properties": [],
                    "ChildNodes": [
                        {
                            "Id": 0,
                            "Name": "New Document Type_6",
                            "Description": "",
                            "Properties": [
                                {
                                    "Id": 0,
                                    "Name": "Yup",
                                    "Description": "",
                                    "Pattern": {
                                        "Id": 0,
                                        "Name": "Social Security Number",
                                        "Description": "The Social Security Number pattern",
                                        "Pattern": "^\\d{3}-?\\d{2}-?\\d{4}$",
                                        "IsSystem": true,
                                        "IsDeleted": null
                                    },
                                    "IsDeleted": null,
                                    "IsActive": true,
                                    "IsMandatory": false,
                                    "FormTemplateAttributeId": "00000000-0000-0000-0000-000000000000",
                                    "AttributeSource": 1
                                }
                            ],
                            "ChildNodes": [],
                            "ParentNodeId": 0,
                            "IsDeleted": null,
                            "Form": null
                        },
                        {
                            "Id": 0,
                            "Name": "New Document Type_7",
                            "Description": "",
                            "Properties": [],
                            "ChildNodes": [],
                            "ParentNodeId": 0,
                            "IsDeleted": null,
                            "Form": null
                        }
                    ],
                    "ParentNodeId": 0,
                    "IsDeleted": null,
                    "Form": null
                }
            ],
            "ParentNodeId": 0,
            "IsDeleted": null,
            "Form": null
        },
        {
            "Id": 0,
            "Name": "New Document Type_2",
            "Description": "",
            "Properties": [],
            "ChildNodes": [
                {
                    "Id": 0,
                    "Name": "New Document Type_8",
                    "Description": "",
                    "Properties": [],
                    "ChildNodes": [],
                    "ParentNodeId": 0,
                    "IsDeleted": null,
                    "Form": null
                }
            ],
            "ParentNodeId": 0,
            "IsDeleted": null,
            "Form": null
        },
        {
            "Id": 0,
            "Name": "New Document Type_3",
            "Description": "",
            "Properties": [],
            "ChildNodes": [],
            "ParentNodeId": 0,
            "IsDeleted": null,
            "Form": null
        },
        {
            "Id": 0,
            "Name": "New Document Type_4",
            "Description": "",
            "Properties": [],
            "ChildNodes": [],
            "ParentNodeId": 0,
            "IsDeleted": null,
            "Form": null
        }
    ],
    "ParentNodeId": 0,
    "IsDeleted": null,
    "Form": null
}

export interface INode {
    Id: number,
    Name: string,
    Description: string,
    Properties: [],
    ChildNodes: [],
    ParentNodeId: number,
    IsDeleted: any,
    Form: any
}