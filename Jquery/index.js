
$(document).ready(function(){
      $("h1").css("color", "red");

      $(document).keydown(function(e){
              $("input").val($("input").val() + e.key) ;

            });

$("button").click(()=> {
      $("input").val("");
});

});
