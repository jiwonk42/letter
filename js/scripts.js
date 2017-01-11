$(document).ready(function(){
  $("form").submit(function(event){
    var enteredName = $("#entered").val();
    var enteredAddress1 = $("#street").val();
    var enteredAddress2 = $("#city").val();

    $(".letterHead").text("Dear " + enteredName + ",");
    $("#letterHead").text(enteredName);
    $("#address1").text(enteredAddress1);
    $("#address2").text(enteredAddress2);

    $(".goAway").show();
    event.preventDefault();
  });
});
