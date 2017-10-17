$(document).ready(function(){
    var year = new Date().getFullYear()
    $("#date").append(year)
    console.log("Marjan Josifovski",year)
$(".buton")
            .hover(function() {
            
            $(this).css("color"," #333333")
  })
            .mouseout(function() {
                $(this).css("color","black")
  });
   
      $(window).scroll(function () { 
        
            if ($(window).scrollTop() < 950) {
                loadSkills1();
                loadSkills2();
                loadSkills3();
                loadSkills4();
                loadSkills5();
                loadSkills6();
                loadSkills7();
                loadSkills8();
                loadSkills9();
               
            }else{

            }
            $(window).off('scroll');
          });

          $("#mdbm").on('click', function(){
            var url = 'https://github.com/maki3p/MDBM-frontend';
            window.open(url, '_blank')
            
        });
       
          
})
