// init plugin
new WOW().init();
var s = skrollr.init();
$('.js-tilt').tilt();

$(function () {
    var toTopButton = $('#to-top');

    $(window).on('scroll', function () {
        // toTop fadeIn
        if ($(this).scrollTop() > 120) {
            toTopButton.fadeIn();
        } else {
            toTopButton.fadeOut();
        }
    });

    // toTop click
    toTopButton.on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });

    // hamburger click
    $('#hamburger').click(function () {
        $(this).toggleClass('click');
        $('#nav').toggleClass('show');
    });

    if ($(window).width() <= 768) {
        s.destroy();
    }

    // page nav active
    var pageNav = $('#page-nav a');
    if(pageNav.length!==0) {
        var Path = location.pathname;
        var currentPath = Path.split('/');
        var currentPathNum = currentPath.length -1;

        pageNav.each(function () {
            if ($(this).attr('href') == currentPath[currentPathNum]) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    }
    
    // 执行I18n翻译
    execI18n();


    $('#language span').each(function () {
        if ($(this).attr('lang') == i18nLanguage) {
            $('#page .page-nav-container').addClass(i18nLanguage);
            $('#nav .nav-container').addClass(i18nLanguage);
            $('body').addClass(i18nLanguage);
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }

        $(this).on('click', function () {
            var language = $(this).attr('lang');
            getCookie("userLanguage", language, {
                expires: 30,
                path: '/'
            });
            location.reload();
        });
    });
});