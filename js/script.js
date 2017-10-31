$(document).ready(function(){
    var year = new Date().getFullYear()
    $("#date").append(year)
    console.log("Marjan Josifovski",year)
$(".buton")
            .hover(function() {
            
            $(this).css("color"," #575d66")
  })
            .mouseout(function() {
                $(this).css("color","black")
  });
   

  var loadSkilsTarget = $("#works").offset().top;
  var interval = setInterval(function() {
      if ($(window).scrollTop() >= loadSkilsTarget) {
        loadSkills1();
        loadSkills2();
        loadSkills3();
        loadSkills4();
        loadSkills5();
        loadSkills6();
        loadSkills7();
        loadSkills8();
        loadSkills9();
          clearInterval(interval);
      }
  }, 250)

  var navTarget = $("#navBar").offset().top;
  var interval1 = setInterval(function() {
      if ($(window).scrollTop() >= navTarget) {
        $('#navBar').addClass('navbar-fixed');
          clearInterval(interval1);
      }
  }, 0)

  

          $("#mdbm").on('click', function(){
            var url = 'https://github.com/maki3p/MDBM-frontend';
            window.open(url, '_blank')
            
        });
       
          
})
