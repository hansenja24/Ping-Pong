/////////////////////------Back End
var pingF = function(number){
  var result = [];
  for(i = 1; i <= number; i ++){
    if(i % 3 == 0){
      result.push("Ping");
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

    var result = pingF(number);
    alert(result);
  })
})
