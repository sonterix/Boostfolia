$(function(){

    // nav
    $('#humburger-menu').on('click', function(){
        $('nav').slideToggle('200');
    });

    $("nav a").click(function() {
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
    $('#video-scene').click(function(){
        $('#video-scene iframe').fadeIn(1500);
        $('#video-scene iframe').attr('src', 'https://www.youtube.com/embed/iKzRIweSBLA?list=PLvFYFNbi-IBFeP5ALr50hoOmKiYRMvzUq&autoplay=1');
    })

    // tabs
    $('#gallery ul li').click(function(){
        $('.active-tab').removeClass('active-tab');
        $(this).addClass('active-tab');

        var index = $('li').index(this);
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
    $('#small-slider').slick({
        autoplay: true,
        autoplaySpeed: 1500,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });

    // who we are
    $('.dot').click(function(){
        var indexCurrent = $('.dot-selected').index();
        $('.dot-selected').removeClass('dot-selected');
        $(this).addClass('dot-selected');

        $('.info').eq(indexCurrent).fadeOut(200);
        $('.small-info').eq(indexCurrent).fadeOut(200);
        
        var indexNew = $(this).index();
        $('.info').eq(indexNew).delay(200).fadeIn(200);
        $('.small-info').eq(indexNew).delay(200).fadeIn(200);
    });

    // locate on map
    $('#locate-on-map small').on('click', function(){
        $('#map').slideToggle('800');
    })

});	