$(function() {

  let objDate = new Date();
  let hours = objDate.getHours();
  if(hours >= 17 || hours<=5){
    document.body.classList.toggle("dark");
  }

  $("#checkbox").change(function(){
    document.body.classList.toggle("dark");
    if($("body").hasClass("dark")) {
      if($(window).width() <= 768) {
        return;
      }
      else {
        $(".owl-gif").toggle("night-mode").fadeToggle(3000);
      }
    }
    else {
      if($(window).width() <= 768) {
        return;
      }
      else {
        $(".sleep-gif").toggle("light-mode").fadeToggle(3000);
      }
    }
    
  });
});
