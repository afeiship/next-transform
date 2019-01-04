(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.transform = function(inTarget, inIterator, inResult) {
    nx.each(inTarget, function(key, value, target) {
      if (inIterator.call(null, inResult, key, value, target)) {
        return nx.BREAKER;
      }
    });
    return inResult;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.transform;
  }
})();
