var test = require('tape');
var JSON = require('json3');
require('es5');

test('fiddlin', function (t) {
  var methods = [
      'addRange'
    , 'collapse'
    , 'collapseToEnd'
    , 'collapseToStart'
    , 'constructor'
    , 'containsNode'
    , 'deleteFromDocument'
    , 'empty'
    , 'extend'
    , 'getRangeAt'
    , 'modify'
    , 'removeAllRanges'
    , 'selectAllChildren'
    , 'setBaseAndExtent'
    , 'setPosition'
  ];
  methods.forEach(function forEachMethod(method) {
    if (Selection.prototype[method]) {
      console.log('++' + method);
    } else {
      console.log('--'  + method);
    }
  });
  t.end();
});

/**
addRange
collapse
collapseToEnd
collapseToStart
deleteFromDocument
getRangeAt
removeAllRanges
selectAllChildren
*/