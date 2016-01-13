$(document).ready(function() {
  var count;
  $("form#aboutYou").submit(function(event) {

    var count = 0;

    console.log($("select#answer1").val())

    if ($("select#answer1").val() === "yes") {
      var count = count + 1;
      console.log(count);
    }

    if ($("select#answer2").val() === "yes") {
      count = count + 1;
    }
    if ($("select#answer3").val() === "yes") {
      var count = count + 1;
    }

    if ($("select#answer4").val() === "yes") {
      var count = count + 1;
    }

    if ($("select#answer5").val() === "yes") {
      var count = count + 1;
    }
    $("div#match").show();

    if (count >3) {
      $("span#party").text("Conservative");
    }

    if (count ===3) {
      $("span#party").text("Moderate")
    }

    if (count <3) {
      $("span#party").text("Liberal")
    }

//      $("span#party").empty().append("span#party");


    event.preventDefault();
  });
});
