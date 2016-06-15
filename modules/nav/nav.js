var nav = {
  start: function(){
    var template = 
      "<navbar>" +
        "<navitem> home </navitem>" +
        "<navitem> module1 </navitem>" +
        "<navitem> module2 </navitem>" +
      "</navbar>";
    
    $("body").append(template);
  }
}