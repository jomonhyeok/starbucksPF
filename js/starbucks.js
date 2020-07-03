$(document).ready(function(){
    $('header nav ul li h2 i').click(function(){
        if($('header nav ul > li').eq($(this).parent().parent().index()).hasClass('active')){
            $('header nav ul > li').removeClass();
        }else{
            $('header nav ul > li').removeClass();
            $('header nav ul > li').eq($(this).parent().parent().index()).addClass('active');
        }
    });
    $('header nav label').click(function(){
        $('header ul > li').removeClass();
    });//메뉴 클릭했을때 하위 메뉴 다 닫히기
    $('section.menu > ul li').click(function(){
        $('section.menu ul li').removeClass('menuActive');
        $(this).addClass('menuActive');

        $('section.menu ol > li').removeClass('tableActive');
        $('section.menu ol > li').eq($('section.menu > ul li').index(this)).addClass('tableActive');
    });

    $('header div.slider').bxSlider({
        randomStart : false,
        auto : true,
        speed : 1000,
        pause: 4500,
        controls: false, // 이전 다음 버튼 노출 여부
        pager : false, //페이지 표시
        adaptiveHeight:true
    });//bx slider
    $('section.menu ol li div.slider').bxSlider({
        randomStart : false,
        auto : true,
        pager : false, //페이지 표시
        maxSlides: 4,
        minSlides: 4,

    });//bx slider
    $('section.reserve div.container div.wrapper div.cover div.front p:nth-of-type(2)').click(function(){
        $('section.reserve div.container div.wrapper div.cover').addClass('leftOpen');
        $('section.reserve div.container div.wrapper div.right').addClass('rightOpen');
        $('section.reserve div.container div.wrapper div div.back').removeClass('backface');
        $('section.reserve div.container button').addClass('btnActive');
    });
    $('section.reserve button.close').click(function(){
        $('section.reserve div.container div.wrapper div.cover').removeClass('leftOpen');
        $('section.reserve div.container div.wrapper div.right').removeClass('rightOpen');
        $('section.reserve div.container div.wrapper div div.back').addClass('backface');
        $('section.reserve div.container button').removeClass('btnActive');
    });

    $('footer div.footer_top ul li i').mouseenter(function(){
        $(this).addClass('green')
    });
    $('footer div.footer_top ul li i').mouseleave(function(){
        $(this).removeClass('green')
    });
    $('body > div').click(function(){
        $('html, body').animate({scrollTop:0}, '500', 'swing');
    });
    $(document).scroll(function(){    
        var maxScollValue =$(document).height() - $(window).height();
        var scrollPer = $(document).scrollTop() / maxScollValue;
        $('.progressBar div').css('width', (scrollPer * 100) + '%'); //맨위의 스크롤바
        console.log( $(document).scrollTop());
    })//scroll
});
