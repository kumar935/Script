console.log("I'm main");
head.load("modules/module1.js", function(){
  Module1.ready();
});

head.load("modules/module2.js", function(){
  Module2.ready();
});