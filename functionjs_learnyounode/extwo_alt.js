function repeat(operation, value){
  if(value === 0)
    return;
  repeat(operation, value - 1);

}

module.exports = repeat;
