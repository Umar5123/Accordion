

    $('.main-wrapper .box-wrapper').each(function () {
        $(this).children('h2').click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).siblings('p').slideUp();
            }else{
                $(this).addClass('active');
                $(this).siblings('p').slideDown();
            }

            $(this).parent().siblings().children('p').slideUp();
            $(this).parent().siblings().children('h2').removeClass('active');
        });
    });


    // $('.main-wrapper .box-wrapper h2').click(function () {
    //     $(this).toggleClass('active').siblings('p').slideToggle();
    //     $(this).parent().siblings().children('p').slideUp().end().children('h2').removeClass('active');
    // });
    





