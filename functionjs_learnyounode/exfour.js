var arr = [{"msg": "one"}, {"msg": "two"}, {"msg": "three"}];
var arrtwo = arr.filter(function(item){
  return item.msg.length === 5;
}).map(function(object){
  return object.msg;
});
console.log(arrtwo);



module.exports = function(container){
  return container.filter(function(item){
    return (item.message.length < 50);
  }).map(function(object){
    return object.message;
  });
};
