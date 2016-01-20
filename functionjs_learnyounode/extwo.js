module.exports = function(operation, value){
  for(var i = 0; i < value; i++){
      operation();
  }  
};
