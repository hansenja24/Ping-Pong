/////////////////////------Back End
var pingF = function(number){
  var result = [];
  for(i = 1; i <= number; i ++){
    if(i % 15 == 0){
      result.push("Ping-Pong");
    } else if(i % 3 == 0){
      result.push("Ping");
    } else if(i % 5 == 0){
      result.push("Pong");
    } else{
      result.push(i);
    };
  } return result;
};


////////////////////------Front End
$("document").ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var number = $("input#input").val();
    if(number > 0){
      var result = pingF(number);
      alert(result);
    } else if(number <= 0){
      alert("Please enter a number more than zero!")
    } else {
      alert("Please enter a number!");
    }


  })
})
