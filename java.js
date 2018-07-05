$(document).ready(function(){

  var x = 0;
  $("#btn-light").click(function() {
    if(x==0){

      $("#display").css("background-color", "rgba(116, 164, 65, 0.71)");
      x=1;
    } else {
      $("#display").css("background-color","#4E6139");
      x=0;
    }
  });

  // END light section

  $('.button').on('click', function(e) {
    let btn = e.target.innerHTML;
    if (btn >= '0' && btn <= '9') {
        console.log("number");//handleNumber(btn);
    } else {
        console.log("operator");//handleOperator(btn);
    }
    });

  var num1 = '';
  let num2 = '';
  let operator = '';
  let total = '';

    function handleNumber(num) {


  }






})
