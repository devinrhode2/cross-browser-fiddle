var test = require('tape');

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
  console.log(t);
  methods.forEach(function forEachMethod(method) {
    if (window.Selection.prototype[method]) {
      console.log('has ' + method);
    } else {
      console.log('doesnt have: '  + method);
    } 
  });
  t.end();
});