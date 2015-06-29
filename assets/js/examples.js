var examples = {
  "Basic": {
    "input": {
      "a" : {
        "b" : {
          "c" : "value"
        },
        "d" : ['C', 'B', 'A'],
        "e" : 3
      }
    },
    "capitalize": {
      "get": "a.b.c",
      "capitalize" : null
    },
    "upcase": {
      "get": "a.b.c",
      "upcase" : null
    },
    "downcase": {
      "get": "a.b.c",
      "upcase" : null,
      "downcase" : null
    },
    "first": {
      "get": "a.d",
      "first" : null
    },
    "last": {
      "get": "a.d",
      "last" : null
    },
    "sort": {
      "get": "a.d",
      "sort" : null,
      "first" : null
    },
    "sort 2": {
      "get": "a.d",
      "sort" : true
    },
    "length": {
      "get": "a.d",
      "length" : null,
    },
    "plus": {
      "get": "a.e",
      "plus" : 3,
    },
    "minus": {
      "get": "a.e",
      "minus" : 2
    },
    "times":{
      "get": "a.e",
      "times" : 2
    },
    "dividedBy": {
      "get": "a.e",
      "times" : 2,
      "dividedBy" : 3
    },
    "join": {
      "get": "a.d",
      "join" : "/"
    },
    "truncate": {
      "get": "a.d",
      "join" : "/",
      "truncate": 3
    },
    "truncateWords": {
      "get": "a.d",
      "join" : " ",
      "truncateWords": 2
    },
    "prepend": {
      "get": "a.e",
      "cast" : "string",
      "prepend": "#"
    },
    "append": {
      "get": "a.d",
      "join" : "/",
      "truncate": 3,
      "append": "..."
    },
    "shift": {
      "get": "a.d",
      "join" : "/",
      "truncate": 3,
      "shift": 2
    },
    "replace": {
      "get": "a.d",
      "join" : "/",
      "replace": "/"
    },
    "replace 2": {
      "get": "a.d",
      "join" : "/",
      "replace": ["/", "|"]
    },
    "mapping": {
      "get" : "a.b.c",
      "mapping" : {
        "value" : 1
      }
    },
    "mapping 2": {
      "set" : 1,
      "mapping" : ['a','b','c']
    },
    "mapping 3": {
      "set": [1, 2],
      "mapping": ['a','b','c']
    },
    "mapping 4": {
      "set": ["a", "b"],
      "mapping": {
        "a": "Aha!",
        "b": "Baby"
      }
    },
    "mapping 5": {
      "set": {
        "arg": { "a": "Aha!", "b": "Baby"},
        "input": "a"
      },
      "mappingVar": ["input","arg"]
    },
    "min": {
      "set" : [2, 4,1,7, 9,3],
      "min" : true
    },
    "max": {
      "set" : [2, 4, 1, 7, 9, 3],
      "max" : true
    },
    "min obj": {
      "set" : {a: 9, b: 4, c: 3, d: 5},
      "min" : true
    },
    "flatten": {
      "set"     : [ ['a', 'b'], ['c', 'd'], 'e'],
      "flatten" : true
    },
    "deduplicate": {
      "set"         : [ 1, 2, 3, 1, 2],
      "deduplicate" : true
    },
    "remove integer": {
      "set"    : [ 1, 2, 3],
      "remove" : 2
    },
    "remove empty": {
      "set"    : [ "a", "", "b"],
      "remove" : ""
    },
    "remove string": {
      "set"    : [ "a", "b", "c"],
      "remove" : "b"
    },
    "remove multiple": {
      "set"    : [ "a", "b", "c", ""],
      "remove#1" : "",
      "remove#2" : "b"
    },
    "getindex array": {
      "set"        : [ "a", "b", "c" ],
      "getindex": "2"
    },
    "getproperty object": {
      "set"        : { "a": 0, "b": 1, "c":2 },
      "getproperty": "b"
    },
    "getindexvar array": {
      "set": {
        "i": 1,
        "t": ["a","b","c"]
      },
      "getIndexVar": ["t", "i"]
    },
    "getpropertyvar object": {
      "set": {
        "i" : "b",
        "o" : { "a": 0, "b": 1, "c":2 },
      },
      "getPropertyVar": ["o", "i"]
    },
    "array2object 1": {
      "set": [
        {
          "_id": "2007",
          "value": 538
        }, {
          "_id": "2008",
          "value": 577
        }, {
          "_id": "2009",
          "value": 611
      }],
      "array2object": true
    },
    "array2object 2": {
      "set": [
        {
          "key": "2007",
          "val": 538
        }, {
          "key": "2008",
          "val": 577
        }, {
          "key": "2009",
          "val": 611
      }],
      "array2object": ["key","val"]
    },
    "zip": {
      "set": {
        "array1": [{"_id": "1", "value": 1},  {"_id": "2", "value": 2}],
        "array2": [{"_id": "1", "value": 10}, {"_id": "2", "value": 20}]
      },
      "zip": [ "array1", "array2" ]
    }
  },
  "Compute": {
    "input": {
      "a" : 20,
      "b" : 3,
      "c" : 5,
      "d" : 8
    },
    "round": {
      "$e" : {
        "compute": "round(a / b)",
        "cast": "number"
      }
    },
    "round this": {
      "$e" : {
        "compute#1": "a / b",
        "compute#2": "round(this)",
        "cast": "number"
      }
    },
    "variables": {
      "$x" : {
        "compute#1": "a / b",
        "compute#2": "round(this)",
        "cast": "number"
      },
      "$y" : {
        "path": "b",
        "cast": "number"
      },
      "$z" : {
        "compute": "x + y",
      }
    }
  },
  "CSV": {
    "input": {
      "a" : {
        "b" : ["x","y","z"],
        "d" : null
      }
    },
    "output": {
      "$e" : {
        "find#0": "a",
        "mask": "b",
        "find#1": "b",
        "csv" : ",",
        "trim": true
      }
    },
    "parseCSV": {
      "find": "a.b",
      "csv" : ",",
      "parseCSV": ","
    }
  },
  "Find": {
    "input": {
      "a" : {
        "b" : {
          "c" : "value"
        },
        "d" : null
      }
    },
    "find": {
      "find" : "a.b.c"
    },
    "find 2": {
      "find" : "a",
      "find#1" : "b.c"
    },
    "find 3": {
      "find#0" : "a",
      "find#1" : "b",
      "find#2" : "c"
    },
    "coalesce": {
      "find" : ["x", "x.y", "a.b.c"],
      "coalesce" : true
    },
    "order": {
      "$x.y" : {
        "find" : ["x.y", "a.b.c"],
        "coalesce" : true,
        "upcase" : true
      },
      "$x.z" : {
        "find" : ["x.y", "a.b.c"],
        "first" : true
      }
    }
  },
  "Foreach": {
    "input": {
      "a" : {
        "b" : "x",
        "c" : "y",
        "d" : "z"
      }
    },
    "upcase": {
      "path" : "a",
      "foreach" : {
        "upcase" : true
      }
    }
  },
  "Foreach array": {
    "input": {
      "a" : [
        { "b" : "x" },
        { "b" : "y" },
        { "b" : "z" }
      ]
    },
    "find and upcase": {
      "path" : "a",
      "foreach" : {
        "find": "b",
        "upcase" : true
      }
    }
  },
  "Foreach apply array": {
    "input": {
      "a" : [
        { "b" : "x", "c" : 0 },
        { "b" : "y", "c" : 1 },
        { "b" : "z", "c" : 2 }
      ]
    },
    "find and upcase 2": {
      "path" : "a",
      "foreach" : {
        "$b" : {
          "find": "b",
          "upcase" : true
        }
      }
    }
  },
  "JSON": {
    "input": {
      "a" : {
        "b" : ["x","y","z"],
        "d" : null
      }
    },
    "output": {
      "$e" : {
        "find#0": "a",
        "mask": "b",
        "find#1": "b",
        "json" : ",",
      }
    },
    "parseJSON": {
      "find": "a.b",
      "json" : true,
      "parseJSON": true
    }
  },
  "Mask": {
    "input": {
      "a" : {
        "b" : {
          "c" : "value"
        },
        "d" : null
      }
    },
    "1": {
      "$a" : {
        "find": "a",
        "mask" : "b"
      }
    }
  },
  "Misc": {
    "input": {
      "a" : {
        "b" : {
          "c" : "1234"
        },
        "d" : null
      }
    },
    "find cast": {
      "$a" : {
        "find": "a.b.c",
        "cast" : "number"
      }
    },
    "find default": {
      "$a" : {
        "find": "a.b.d",
        "default": "truc"
      }
    },
    "unjson": {
      "$a" : {
        "find": "a.b.d",
        "default": '["truc", "bidule"]',
        "unjson": null
      }
    },
    "required": {
      "$a" : {
        "find": "a.b.d",
        "required": true
      }
    },
    "extendWith": {
      "extendWith": {
        "a" : {
          "b" : {
            "cc" : "val1"
          },
          "d" : "val2"
        }
      }
    },
    "set": {
      "set": {
        "a" : {
          "b" : "val1",
          "e" : "val2"
        }
      }
    }
  },
  "Select": {
    "input": {
      "a" : {
        "b" : {
          "c" : "value"
        },
        "d" : null
      }
    },
    "first": {
      "$$" : {
        "select" : ".a > .b > .c",
        "first": true
      }
    },
    "first 2": {
      "$d.e.f" : {
        "select" : ".a > .b > .c",
        "first": true
      }
    },
    "first 3": {
      "$$" : {
        "select" : ".a",
        "first": true,
        "select#1" : ".b > .c",
        "first#1": true
      }
    },
    "first 4": {
      "select" : ".a",
      "first": true,
      "select#1" : ".b > .c",
      "first#1": true
    },
    "first 5": {
      "$d.e" : {
        "select" : ".a",
        "first": true,
        "select#1" : ".b > .c",
        "first#1": true
      }
    },
    "first 6": {
      "$$" : {
        "select#0" : ".a",
        "first#0": true,
        "select#1" : ".b",
        "first#1": true,
        "select#2" : ".c",
        "first#2": true
      }
    },
    "first 7": {
      "select#0" : ".a",
      "first#0": true,
      "select#1" : ".b",
      "first#1": true,
      "select#2" : ".c",
      "first#2": true
    },
    "first 8": {
      "$d" : {
        "select#0" : ".a",
        "first#0": true,
        "select#1" : ".b",
        "first#1": true,
        "select#2" : ".c",
        "first#2": true
      }
    }
  },
  "Empty": {
    "default": {
      "default" : {
        "a" : {
          "b" : [
            { "#text" : "1" },
            { "#text" : "2" },
            { "#text" : "3" }
          ]
        }
      },
      "select" : ".a > .b .#text"
    }
  },
  "Template": {
    "input": {
      "a" : {
        "b" : {
          "c" : "1"
        },
        "d" : "2",
        "e" : "4"
      },
      "f": "8"
    },
    "mustache": {
      "$a" : {
        "template": "X{{a.b.c}}X{{a.d}}X{{a.e}}X{{f}}",
      }
    }
  },
  "Xml": {
    "parseXML": {
      "default": "<root><item xml:id=\"1\">A</item><item xml:id=\"2\">B</item><item xml:id=\"3\">C</item></root>",
      "parseXML" : {
        "specialChar": "#",
        "longTag" : true
      }
    },
    "output": {
      "default": {
        "root" : {
          "item" : [
            { "index" : "1", "$t" : "A"},
            { "index" : "2", "$t" : "B"},
            { "index" : "3", "$t" : "C"}
          ]
        }
      },
      "xml" : {
        "indent": false
      }
    }
  },
  "Assert" : {
    "input" : {
      "val" : "unmodified",
      "a" : 1,
      "b" : "one"
    },
    "if": {
      "$val" : {
        "get" : "a",
        "assert": "this == 1",
        "set" : "if val"
      }
    }
  },
  "Assert2" : {
    "input" : {
      "val" : "unmodified",
      "a" : 2,
      "b" : "one"
    },
    "if else": {
      "$val#1" : {
        "assert": "a == 1",
        "set" : "if val"
      },
      "$val#2" : {
        "get" : "val",
        "default": "else val",
      }
    }
  },
  "Sum": {
    "input": [1,2,3],
    "1": {
      "sum": true
    }
  },
  "Substring": {
    "input": "20150310",
    "month": {
      "substring": [4,2]
    },
    "day": {
      "substring": [-2]
    }
  }

};

var inputArea      = document.getElementById('input');
var stylesheetArea = document.getElementById('stylesheet');
var outputArea     = document.getElementById('output');

var showExample = function showExample(e) {
  var exampleClicked = document.getElementsByClassName("exampleClicked");
  if(exampleClicked.length > 0){
    for(var i = 0 ; i < exampleClicked.length ; i++){
      exampleClicked[i].className = "example";
    }
  }
  e.target.className = e.target.className + " exampleClicked";
  
  var exampleName      = e.target.textContent;
  var difficulty       = exampleName.split(':')[0];
  var subName          = exampleName.split(':')[1].trim();
  var input            = examples[difficulty].input;
  var stylesheet       = examples[difficulty][subName];
  inputEditor.set(input);
  stylesheetEditor.set(stylesheet);
  var result           = JBJ.renderSync(stylesheet, input);
  outputEditor.set(result);
};

var examplesList = document.getElementsByClassName('example');
var examplesLen  = examplesList.length;
for (var e = 0; e < examplesLen; e++) {
  var example     = examplesList[e];
  var exampleName = example.textContent;
  example.addEventListener('click', showExample);
}
