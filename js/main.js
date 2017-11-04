$(function($){

    // nav
        //show-hide nav bar
    $('#humburger-menu').on('click', function(){
        $('nav').slideToggle('200');
    });

        // click on nav-menu
    $("nav a").on('click',function() {
        $('nav').slideUp('200');

        var clicked = $(this).attr("href")

        if(clicked == '#chose-plan'){
            var destination = $(clicked).offset().top;            
        } else {
            var destination = $(clicked).offset().top-50;
        }

        $("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 1200);

        return false;
    });

    // slick slider
    $('#slider').slick({
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: true
    });

    // iframe video
    $('#video-scene').on('click', function(){
        $('#video-scene iframe').fadeIn(1500);
        $('#video-scene iframe').attr('src', 'https://www.youtube.com/embed/iKzRIweSBLA?list=PLvFYFNbi-IBFeP5ALr50hoOmKiYRMvzUq&autoplay=1');
    })

    // tabs
    $('#gallery ul li').on('click', function(){
        $('.active-tab').removeClass('active-tab');
        $(this).addClass('active-tab');

        var index = $('#gallery li').index(this);
        $('.active-block').removeClass('active-block');
        $('#block').find('div').eq(index).addClass('active-block');

        $.ajax({
            url: 'src/img-giver.php',
            type: 'POST',
            dataType: 'json',
            data: {index: index},
            success: function(result){
                $('.active-block').html("");
                $.each(result, function(index, value){
                    $('.active-block').append("<img src='../img/gallery/" + value + "' alt='" + index + "'>");
                });
            },
        });

    });

    // click on ALL PROJECTS for load img
    $('.active-tab').click();

    // slick small-slider
    if(screen.width < 900){
        $('#small-slider').slick({
            autoplay: true,
            autoplaySpeed: 1500,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    } else if(screen.width < 1200){
        $('#small-slider').slick({
            autoplay: true,
            autoplaySpeed: 1500,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1
        });
    } else {
        $('#small-slider').slick({
            autoplay: true,
            autoplaySpeed: 1500,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1
        });
    }

    // who we are
        // autoplay
    var checkerWhoWeAre = 1;
    setInterval(function(){
        $('.dot').eq(checkerWhoWeAre).click();

        if(checkerWhoWeAre == 3){
            checkerWhoWeAre = 0;
        } else {
            checkerWhoWeAre++;
        }
      }, 4000);
      
        // click on dots
    $('.dot').on('click', function(){
        var indexCurrent = $('.dot-selected').index();
        $('.dot-selected').removeClass('dot-selected');
        $(this).addClass('dot-selected');

        $('.info').eq(indexCurrent).fadeOut(200);
        $('.small-info').eq(indexCurrent).fadeOut(200);
        
        var indexNew = $(this).index();
        $('.info').eq(indexNew).delay(200).fadeIn(200);
        $('.small-info').eq(indexNew).delay(200).fadeIn(200);
    });

        // counter %
    $(window).scroll(function () {
        var scrTop = $(window).scrollTop();
        var whoWeAre = $('#who-we-are').offset().top-250;

        if(scrTop >= whoWeAre) {
            $('.info-counter').each(function(){
                var from = 0;
                var to = $(this).text();
                var currentElement = $(this);
        
                setInterval(function () {
                    from++;
                    if (from <= to) {
                        currentElement.html(from).append('%');
                        currentElement.parent().find('.value-box-tb').css('width', from + '%');
                    };
                }, 50);
            });
        }
    });

    // locate on map
    $('#locate-on-map small').on('click', function(){
        $('#map').slideToggle('800');
    });

    // to top button
        // check position screen
        $(window).scroll(function(){
            if ($(this).scrollTop() > 500 && screen.width > 900) {
                $('#to-top-button').fadeIn(300);
            } else {
                $('#to-top-button').fadeOut(300);
            }
        });

        // scroll to top
    $('#to-top-button').on('click', function(){

        var clicked = $(this).attr("href");
        var destination = $(clicked).offset();

        $('html:not(:animated),body:not(:animated)').animate({
            scrollTop : 0
        }, 1200);

        return false;
    });

});	