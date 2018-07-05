$(document).ready(function(){


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
