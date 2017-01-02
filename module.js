var foo = (function() {
  var private = function(msg) {
    return msg;
  }

  var public = function() {
    console.log(private("Hello"));
  }
  
  return {
    hi: public
  }
}());

foo.hi();