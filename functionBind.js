var bind = function(func, context){
  var args = [].slice.call(arguments,2);
  return function(){
    var args2 = [].slice.call(arguments);
    var conc = args.concat(args2);
    return func.apply(context, conc);
  }
};  

Function.prototype.bind = function(context) {
  var fn = this;
  var args = [].slice.call(arguments,1);
  return function(){
    var innerArgs = [].slice.call(arguments);
    var conc = args.concat(innerArgs)
    return fn.apply(context, conc);
  }
};