
/* Show Hide Overview or Curriculum */
$(document).ready(function(){
    $("#overview-btn").click(function(){
      $(".curriculum").hide();
      $(".overview").show();
    });

    $("#curricum-btn").click(function(){
      $(".overview").hide();
      $(".curriculum").show();
    });
  });



  /* Semester toogle*/
  $(function() {
    $(".curriculum button").on('click',function(){
      $(".curriculum>div .panel.active").removeClass("active");
      $(this).addClass("active");
      var panelId = $(this).attr("data-panel");

      $(".curriculum .panel.active").slideToggle(300, function(){
        $(this).removeClass("active");
        $("#"+panelId).slideToggle(300, function(){
          $(this).addClass("active");
        });
      });
    });
});
