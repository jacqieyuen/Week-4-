
var innerObj = function(){
  var privateString = "Hello I am private on inner obj";
  this.publicString = "Hello I am a public string on inner obj";

  this.PrivateString = function(){
    return privateString;
  }
}

var outerObj = function(){
  var inner = new innerObj();
  var privateString = "Hello I am private on outer obj";
  this.publicString = "Hello I am a public string on outer obj";

  this.printPrivateInnerString = function(){
  };

  var getInput = function(){
    var santa = this;
    $('input').hide('slow', function(){
      console.log(this);
      console.log(this.printPrivateInnerString());
    });
  }
}

var outer = new outerObj();
outer.getInput();
