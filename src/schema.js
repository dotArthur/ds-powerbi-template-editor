export var schema ={
    "type": "object",
    "properties": {
      "chartType": {
        "type": "string",
        "title": "Chart Type"
      },
      "barDirection": {
        "type": "string",
        "title": "Bar Direction"
      },
      "barStyle": {
        "type": "object",
        "title": "Bar Style",
        "properties": {
          "fill": {
            "title": "Fill",
            "type": "string",
            "format": "color"
          },
          "stroke": {
            "title": "Stroke",
            "type": "string",
            "format": "color"
          }
        }
      }
    },
    "required": ["chartType", "barDirection", "barStyle"]
  }