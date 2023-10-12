import logo from './logo.svg';
import './App.css';
import { JSONEditor } from 'react-schema-based-json-editor';

function JsonEditorComponent() {
  return (
    <div className="JsonEditor">
      <header className="JsonEditor-header">
        <div id="editor"></div>
      </header>
    </div>
  );


}




let initialValue =
{
  stringExample: 'a default string example',
  booleanExample: true,
  numberExample: 123.4,
  integerExample: 124,
  nullExample: null,
  objectExample: {
    propertyExample1: '',
    propertyExample2: 0,
  },
  arrayExample: [
    'default item 1',
    'default item 2',
  ],
  readOnlyExample: 'abc',
  enumExample: 'enum 1',
  colorExample: '#000000',
  textareaExample: '',
  patternExample: 'abc',
  imagePreviewExample: 'http://image2.sina.com.cn/bj/art/2004-08-02/U91P52T4D51657F160DT20040802125523.jpg',
  markdownExample: '###### markdown title and code example\n\n```js\nfunction foo(bar) {\n    console.log(bar);\n}\n```',
  codeExample: 'function foo(bar) {\n    console.log(bar);\n}\n',
  itemTitleExample: [
    {
      propertyExample1: 'foo',
      propertyExample2: 1,
    },
    {
      propertyExample1: 'bar',
      propertyExample2: 2,
    },
    {
      propertyExample1: 'baz',
      propertyExample2: 3,
    },
    {
      propertyExample1: 'abc',
      propertyExample2: 4,
    },
    {
      propertyExample1: 'def',
      propertyExample2: 5,
    },
    {
      propertyExample1: 'ghi',
      propertyExample2: 6,
    },
  ],
  optionalObjectExample: {},
  collapsedObjectExample: {},
  emptyEnumExample: '',
  uploadFileExample: '',
  requiredWhenExample: {
    kind: 'enum 1',
    propertyExample4: '',
  },
  checkboxBooleanExample: true,
  enumTitlesExample: 'enum 1',
  itemTitleEnumTitleExample: [
    {
      propertyExample1: 'bar',
    },
  ],
  selectBooleanExample: false,
  select2BooleanExample: false,
  stringEnumSelectExample: 'enum 1',
  stringEnumRadioboxExample: 'enum 1',
  numberEnumSelectExample: 1,
  numberEnumRadioboxExample: 1,
  classNameExample: '',
  enumArrayExample: [],
  enumArraySelect2Example: [],
}

let default_schema = {
  "type": "object",
  "title": "GUI:",
  "description": "a description example",
  "properties": {
    "stringExample": {
      "type": "string",
      "title": "A string example",
      "description": "a string description example",
      "default": "a default string example",
      "minLength": 15,
      "maxLength": 20,
      "propertyOrder": 1
    },
    "booleanExample": {
      "type": "boolean",
      "title": "A boolean example",
      "description": "a boolean description example",
      "default": true,
      "propertyOrder": 2
    },
    "numberExample": {
      "type": "number",
      "title": "A number example",
      "description": "a number description example",
      "default": 123.4,
      "minimum": 10,
      "exclusiveMinimum": true,
      "maximum": 1000,
      "exclusiveMaximum": true,
      "propertyOrder": 3
    },
    "integerExample": {
      "type": "integer",
      "title": "A integer example",
      "description": "a integer description example",
      "default": 124,
      "multipleOf": 2,
      "propertyOrder": 4
    },
    "nullExample": {
      "type": "null",
      "title": "A null example",
      "description": "a null description example",
      "default": null,
      "propertyOrder": 5
    },
    "objectExample": {
      "type": "object",
      "title": "A object example",
      "description": "a object description example",
      "properties": {
        "propertyExample1": {
          "type": "string"
        },
        "propertyExample2": {
          "type": "number"
        }
      },
      "default": {},
      "required": [
        "propertyExample1",
        "propertyExample2"
      ],
      "propertyOrder": 6
    },
    "arrayExample": {
      "type": "array",
      "title": "A array example",
      "description": "a array description example",
      "items": {
        "type": "string",
        "maxLength": 15
      },
      "default": [
        "default item 1",
        "default item 2"
      ],
      "minItems": 1,
      "uniqueItems": true,
      "propertyOrder": 7
    },
    "readOnlyExample": {
      "type": "string",
      "readonly": true,
      "default": "abc",
      "propertyOrder": 8
    },
    "readOnlyAndOptionalExample": {
      "type": "string",
      "readonly": true,
      "default": "abc",
      "propertyOrder": 9
    },
    "enumExample": {
      "type": "string",
      "enum": [
        "enum 1",
        "enum 2"
      ],
      "propertyOrder": 10
    },
    "optionalExample": {
      "type": "string",
      "propertyOrder": 11
    },
    "optionalAndDefaultExample": {
      "type": "string",
      "default": "abc",
      "propertyOrder": 12
    },
    "booleanOptionalExample": {
      "type": "boolean",
      "propertyOrder": 13
    },
    "colorExample": {
      "type": "string",
      "format": "color",
      "default": "#000000",
      "propertyOrder": 14
    },
    "textareaExample": {
      "type": "string",
      "format": "textarea",
      "propertyOrder": 15
    },
    "patternExample": {
      "type": "string",
      "pattern": "^[A-z]{3}$",
      "default": "abc",
      "propertyOrder": 16
    },
    "imagePreviewExample": {
      "type": "string",
      "default": "http://image2.sina.com.cn/bj/art/2004-08-02/U91P52T4D51657F160DT20040802125523.jpg",
      "propertyOrder": 17
    },
    "markdownExample": {
      "type": "string",
      "format": "markdown",
      "default": "###### markdown title and code example\n\n```js\nfunction foo(bar) {\n    console.log(bar);\n}\n```",
      "propertyOrder": 18
    },
    "codeExample": {
      "type": "string",
      "format": "code",
      "default": "function foo(bar) {\n    console.log(bar);\n}\n",
      "propertyOrder": 19
    },
    "itemTitleExample": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "propertyExample1": {
            "type": "string"
          },
          "propertyExample2": {
            "type": "number"
          }
        },
        "required": [
          "propertyExample1",
          "propertyExample2"
        ],
        "collapsed": true
      },
      "default": [
        {
          "propertyExample1": "foo",
          "propertyExample2": 1
        },
        {
          "propertyExample1": "bar",
          "propertyExample2": 2
        },
        {
          "propertyExample1": "baz",
          "propertyExample2": 3
        },
        {
          "propertyExample1": "abc",
          "propertyExample2": 4
        },
        {
          "propertyExample1": "def",
          "propertyExample2": 5
        },
        {
          "propertyExample1": "ghi",
          "propertyExample2": 6
        }
      ],
      "propertyOrder": 20
    },
    "optionalObjectExample": {
      "type": "object",
      "properties": {
        "propertyExample1": {
          "type": "string"
        },
        "propertyExample2": {
          "type": "number"
        }
      },
      "maxProperties": 1,
      "minProperties": 0,
      "propertyOrder": 21
    },
    "collapsedObjectExample": {
      "type": "object",
      "properties": {
        "propertyExample1": {
          "type": "string"
        }
      },
      "collapsed": true,
      "propertyOrder": 22
    },
    "emptyEnumExample": {
      "type": "string",
      "enum": [],
      "propertyOrder": 23
    },
    "uploadFileExample": {
      "type": "string",
      "format": "base64",
      "propertyOrder": 24
    },
    "requiredWhenExample": {
      "type": "object",
      "properties": {
        "kind": {
          "type": "string",
          "enum": [
            "enum 1",
            "enum 2",
            "enum 3"
          ]
        },
        "propertyExample1": {
          "type": "number",
          "requiredWhen": [
            "kind",
            "===",
            "enum 1"
          ]
        },
        "propertyExample2": {
          "type": "string",
          "requiredWhen": [
            "kind",
            "===",
            "enum 2"
          ]
        },
        "propertyExample3": {
          "type": "number",
          "requiredWhen": [
            "kind",
            "in",
            [
              "enum 1",
              "enum 2"
            ]
          ]
        },
        "propertyExample4": {
          "type": "string"
        },
        "propertyExample5": {
          "type": "string"
        },
        "propertyExample6": {
          "type": "string",
          "optionalWhen": [
            "kind",
            "===",
            "enum 2"
          ]
        }
      },
      "required": [
        "kind",
        "propertyExample4"
      ],
      "propertyOrder": 25
    },
    "checkboxBooleanExample": {
      "type": "boolean",
      "default": true,
      "format": "checkbox",
      "propertyOrder": 26
    },
    "enumTitlesExample": {
      "type": "string",
      "enum": [
        "enum 1",
        "enum 2"
      ],
      "enumTitles": [
        "enum title 1",
        "enum title 2"
      ],
      "propertyOrder": 27
    },
    "itemTitleEnumTitleExample": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "propertyExample1": {
            "type": "string",
            "enum": [
              "foo",
              "bar"
            ],
            "enumTitles": [
              "foo title",
              "bar title"
            ]
          }
        },
        "required": [
          "propertyExample1"
        ]
      },
      "default": [
        {
          "propertyExample1": "bar"
        }
      ],
      "propertyOrder": 28
    },
    "selectBooleanExample": {
      "type": "boolean",
      "default": false,
      "format": "select",
      "propertyOrder": 28
    },
    "select2BooleanExample": {
      "type": "boolean",
      "default": false,
      "format": "select2",
      "propertyOrder": 30
    },
    "stringEnumSelectExample": {
      "type": "string",
      "format": "select",
      "enum": [
        "enum 1",
        "enum 2"
      ],
      "enumTitles": [
        "enum title 1",
        "enum title 2"
      ],
      "propertyOrder": 31
    },
    "stringEnumRadioboxExample": {
      "type": "string",
      "format": "radiobox",
      "enum": [
        "enum 1",
        "enum 2"
      ],
      "enumTitles": [
        "enum title 1",
        "enum title 2"
      ],
      "propertyOrder": 32
    },
    "numberEnumSelectExample": {
      "type": "number",
      "format": "select",
      "enum": [
        1,
        2
      ],
      "enumTitles": [
        "one",
        "two"
      ],
      "propertyOrder": 33
    },
    "numberEnumRadioboxExample": {
      "type": "number",
      "format": "radiobox",
      "enum": [
        1,
        2
      ],
      "enumTitles": [
        "one",
        "two"
      ],
      "propertyOrder": 34
    },
    "classNameExample": {
      "type": "string",
      "className": "custom-class-string",
      "propertyOrder": 35
    },
    "enumArrayExample": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "enum": [
        "foo",
        "bar"
      ],
      "enumTitles": [
        "foo title",
        "bar title"
      ],
      "propertyOrder": 36
    },
    "enumArraySelect2Example": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "enum": [
        "foo",
        "bar"
      ],
      "enumTitles": [
        "foo title",
        "bar title"
      ],
      "format": "select2",
      "propertyOrder": 37
    }
  },
  "required": [
    "stringExample",
    "booleanExample",
    "numberExample",
    "integerExample",
    "nullExample",
    "objectExample",
    "arrayExample",
    "readOnlyExample",
    "enumExample",
    "colorExample",
    "textareaExample",
    "patternExample",
    "imagePreviewExample",
    "markdownExample",
    "codeExample",
    "performanceExample",
    "itemTitleExample",
    "optionalObjectExample",
    "propertyOrderExample",
    "collapsedObjectExample",
    "emptyEnumExample",
    "uploadFileExample",
    "requiredWhenExample",
    "checkboxBooleanExample",
    "enumTitlesExample",
    "itemTitleEnumTitleExample",
    "selectBooleanExample",
    "select2BooleanExample",
    "stringEnumSelectExample",
    "stringEnumRadioboxExample",
    "numberEnumSelectExample",
    "numberEnumRadioboxExample",
    "classNameExample",
    "enumArrayExample",
    "enumArraySelect2Example"
  ]
}

export default JsonEditorComponent;