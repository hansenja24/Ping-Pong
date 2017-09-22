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

var pingCalc = function(array, length){
  var pingResult = 0;
  var pongResult = 0;
  var pingpongResult = 0;
  for(i = 0; i < length; i++){
    if(array[i] === "Ping"){
      pingResult += 1;
    } else if(array[i] === "Pong"){
      pongResult += 1;
    } else if(array[i] === "Ping-Pong"){
      pingpongResult += 1;
    }
  }
  var result = [pingResult, pongResult, pingpongResult];
  return result;
}


////////////////////------Front End
$("document").ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    $(".result").hide();
    var number = $("input#input").val();
    if(number > 0){
      var result = pingF(number);
      for(i = 0; i < result.length; i++){
        $("ul#result").append("<li>"+result[i]+"</li>");
      }

      var length = result.length;
      var value = pingCalc(result, length);

      $(".result").show();
      $("#value").text(number);
      $("#ping").text(value[0]);
      $("#pong").text(value[1]);
      $("#pingpong").text(value[2]);

    } else if(number <= 0){
      alert("Please enter a number more than zero!")
    } else {
      alert("Please enter a number!");
    }

  })
})
