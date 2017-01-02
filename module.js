var foo = (function() {
  var _private = function(msg) {
    return msg;
  }

  var public = function() {
    console.log(_private("Hello"));
  }
  
  return {
    hi: public
  }
}());

foo.hi();