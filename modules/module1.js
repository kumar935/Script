var Module1 = {
  ready: function(){
    var self = this;
    head.load([
      "node_modules/underscore/underscore-min.js"
    ], function(){
      self.start();
    });
  },
  start: function(){
    console.log("got it from module1");
  }
};
