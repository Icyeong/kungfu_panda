$(document).ready(function () {


    //MENU SECTION

    $('.logo').animate({
        width: 41.6 + '%'
    }, 1000, 'easeInOutBack', function () {
        $('.intro_img').transition({
            transform: 'scale(1.2)'
        }, 800);
    });

    $('.menu').click(function () {
        $('.logo').transition({
            width: 0
        }, 1000, 'easeInOutBack');

        $('.intro_img').transition({
            bottom: -1000
        }, 700);

        $('.menu').transition({
            opacity: 0
        }, 800);
    });


    // MENU SECTION -> CHARACTER SECTION CLICK시

    $('.menu_1').click(function () {

        $('.menu_section').transition({
            backgroundPosition: 'left'
        }, 800, function () {
            $('.character_section').fadeIn(900, function () {
                $('.character_name').transition({
                    transform: 'scale(1.2)'
                }, 800);
            });
        });

    });

    // MENU SECTION -> SERIES SECTION CLICK시

    $('.menu_2').click(function () {

        $('.menu_section').transition({
            backgroundPosition: 'right'
        }, 800, function () {
            $('.series_section').fadeIn(900, function () {
                $('.series_txt').transition({
                    transform: 'scale(1.3)',
                    margin: '250px auto 0 auto',
                    opacity: 1
                }, 800, function () {
                    $('.series_container').animate({
                        top: 0
                    }, 1400, 'easeOutBounce');
                });
            });
        });

    });

    // CHARACTER, MENU 연동

    $('.character').each(function (index) {
        $(this).attr('data-index', index);
    });

    $('.character_name').each(function (index) {
        $(this).attr('data-index', index);
    });

    $('.character_menu').each(function (index) {
        $(this).attr('data-index', index);
    }).click(function () {

        var character = $(this).attr('data-index');

        $('.character[data-index!=' + character + ']').transition({
            opacity: 0
        }, 500);

        $('.character_name').transition({
            transform: 'scale(1)'
        }, 500);

        $('.character').eq(character).transition({
            opacity: 1
        }, 1000, function () {
            $('.character_name').transition({
                transform: 'scale(1.3)'
            }, 800);
        });

    });

    //MOBILE_BTN
    var i = 0;
    var ww = $(window).width();

    $('#mo_btn').click(function () {

        if (i == 0) {
            $('.mo_wrap').css({
                transform: 'rotate(90)'
            }).transition({
                width: 50 + '%',
                height: 450,
                transform: 'rotate(0)',
                opacity: 1
            });
            i++;

            $('#mo_btn').transition({
                background: '#EFB128'
            }, 500);
        } else if (i == 1) {
            $('.mo_wrap').transition({
                width: 0,
                height: 0,
                transform: 'rotate(-270)',
                opacity: 0
            }, 1000);

            $('#mo_btn').transition({
                background: 'white'
            }, 500);
            i = 0;
        }
    });


    $('.mo_character_menu').each(function (index) {
        $(this).attr('data-index', index);
    }).click(function () {

        var character = $(this).attr('data-index');

        $('.mo_character_menu').transition({
            color: 'black'
        });

        $('.mo_character_menu').eq(character).transition({
            color: '#EA5715'
        });
        $('.mo_wrap').transition({
            width: 0,
            height: 0,
            transform: 'rotate(-270)',
            opacity: 0
        }, 1000);

        $('#mo_btn').transition({
            background: 'white'
        }, 500);
        i = 0;

        //character & mobile_character_menu 연동
        $('.character[data-index!=' + character + ']').transition({
            opacity: 0
        }, 500);

        $('.character_name').transition({
            transform: 'scale(1)'
        }, 500);

        $('.character').eq(character).transition({
            opacity: 1
        }, 1000, function () {
            $('.character_name').transition({
                transform: 'scale(1.3)'
            }, 800);
        });
    });

    $('.character, #move_to_series').click(function(){
        $('.mo_wrap').transition({
            width: 0,
            height: 0,
            transform: 'rotate(-270)',
            opacity: 0
        }, 1000);

        $('#mo_btn').transition({
            background: 'white'
        }, 500);
        i = 0;
    })

    // VIEW_BTN CLICK -> PART SECTION

    $('.about_series_section').each(function (index) {
        $(this).attr('data-index', index);
    });

    $('.video').each(function (index) {
        $(this).attr('data-index', index);
    });

    $('.about_part_txt').each(function (index) {
        $(this).attr('data-index', index);
    });

    $('.view_btn').each(function (index) {
        $(this).attr('data-index', index);
    }).click(function () {
        var part = $(this).attr('data-index');

        $('.about_series_section').transition({
            height: 100 + 'vh'
        }, 1000);

        $('.part_menu').eq(part).transition({
            // fontSize:2+'vw',
            fontWeight: 700
        });

        $('.video').eq(part).fadeIn(500);
        $('.about_part_txt').eq(part).fadeIn(500);

        if (part == 0) {

            $('.about_series_section').css({
                backgroundImage: 'url(./img/part1.jpg)'
            });

            $('.bg_cover').transition({
                background: 'rgba(60, 41, 13, 0.8)'
            }, 1000);


        } else if (part == 1) {

            $('.about_series_section').css({
                backgroundImage: 'url(./img/part2.jpg)'
            });

            $('.bg_cover').transition({
                background: 'rgba(61, 11, 11, 0.8)'
            }, 1000);


        } else if (part == 2) {

            $('.about_series_section').css({
                backgroundImage: 'url(./img/part3.jpg)'
            });

            $('.bg_cover').transition({
                background: 'rgba(11, 61, 37, 0.8)'
            }, 1000);


        }
    });

    // PART MENU

    $('.part_menu').each(function (index) {
        $(this).attr('data-index', index);
    }).click(function () {

        var part = $(this).attr('data-index');

        $('.video,.about_part_txt').css({
            display: 'none'
        });

        $('.part_menu').transition({
            // fontSize:15,
            fontWeight: 400
        }, 200);

        $('.part_menu').eq(part).transition({
            // fontSize:20,
            fontWeight: 700
        }, 200);

        $('.video').eq(part).fadeIn(1000);
        $('.about_part_txt').eq(part).fadeIn(1500);


        if (part == 0) {

            $('.about_series_section').transition({
                backgroundImage: 'url(./img/part1.jpg)'
            }, 1000);

            $('.bg_cover').transition({
                background: 'rgba(60, 41, 13, 0.8)'
            }, 1000);


        } else if (part == 1) {

            $('.about_series_section').transition({
                backgroundImage: 'url(./img/part2.jpg)'
            }, 1000);

            $('.bg_cover').transition({
                background: 'rgba(61, 11, 11, 0.8)'
            }, 1000);


        } else if (part == 2) {

            $('.about_series_section').transition({
                backgroundImage: 'url(./img/part3.jpg)'
            }, 1000);

            $('.bg_cover').transition({
                background: 'rgba(11, 61, 37, 0.8)'
            }, 1000);



        }

    });

    //VIDEO PLAY


    // MENU CHANGE

    $('#move_to_series').click(function () {

        $('.character_section').animate({
            left: -100 + 'vw'
        }, 1500, 'easeInOutQuint');

        $('.series_container').css({
            top: 0
        });
        $('.series_section').css({
            display: 'block',
            left: 100 + 'vw',
        }).animate({
            left: 0
        }, 1500, 'easeInOutQuint');
    });

    $('#move_to_character').click(function () {

        $('.about_series_section').transition({
            height: 0
        });
        $('.video,.about_part_txt').css({
            display: 'none'
        });

        $('.series_section').animate({
            left: 100 + 'vw'
        }, 1500, 'easeInOutQuint');

        $('.character_section').css({
            display: 'block',
            left: -100 + 'vw',
        }).animate({
            left: 0
        }, 1500, 'easeInOutQuint');
    });



    // RESIZE
    $(window).resize(function () {
        ww = $(window).width();
    });



















}); //end