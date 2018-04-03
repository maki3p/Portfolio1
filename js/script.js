$(document).ready(function () {
    var year = new Date().getFullYear()
    $("#date").append(year)
    
    $(".buton")
        .hover(function () {

            $(this).css("color", " #575d66")
        })
        .mouseout(function () {
            $(this).css("color", "black")
        });


    var loadSkilsTarget = $("#works").offset().top;
    var interval = setInterval(function () {
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

    
    var navpos = $(window).height()
    
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > navpos) {
            $('#navBar').addClass('navbar-fixed');
        } else {
            $('#navBar').removeClass('navbar-fixed');
        }
    });
   


    $("#mdbm").on('click', function () {
        var url = 'https://github.com/maki3p/MDBM-frontend';
        window.open(url, '_blank')

    });
    

    
})
