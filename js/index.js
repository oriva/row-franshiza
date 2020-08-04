$().ready(() => {
    let priceVal=100, margVal=50, clientVal=2, mouthVal=5, totalVal;
    setTimeout(() => {
        var spiwsuper = new Swiper('.slider-we-do', {
            slidesPerView: 4,
            spaceBetween: 30,
            breakpoints: {
                768: {
                    slidesPerView: 1.5,
                    spaceBetween: 30,
                }
            }
        });
        function changePrice() {
            totalVal = (priceVal*Math.round(margVal*0.1)*clientVal*mouthVal)*100;
            $('.js-change-price').html(totalVal);
        }
        $(".js-range-slider_price").ionRangeSlider({
            values: [0, 50, 100, 200, 300, 400, 500, 700, 1000],
            from: 2,
            grid: true,
            onChange: function (data) {
                priceVal = data.input[0].value;
                changePrice();
            }
        });

        $(".js-range-slider_marginality").ionRangeSlider({
            values: [10, 20, 30, 40, 50, 60, 70, 80, 90],
            from: 4,
            grid: true,
            onChange: function (data) {
                margVal = data.input[0].value;
                changePrice();
            }
        });

        $(".js-range-slider_client").ionRangeSlider({
            values: [1, 2, 3, 4, 5, 10, 15, 20, 30],
            from: 1,
            grid: true,
            onChange: function (data) {
                clientVal = data.input[0].value;
                changePrice();
            }
        });

        $(".js-range-slider_mouth").ionRangeSlider({
            values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            from: 4,
            grid: true,
            onChange: function (data) {
                mouthVal = data.input[0].value;
                changePrice();
            }
        });
    }, 100);
    $('.scroll-js').on('click', function (e) {
        e.preventDefault();
        $("body,html").animate(
            {
                scrollTop: $($(this).attr('href')).offset().top
            },
            800
        );
        if($('.burger-menu').hasClass('burger-menu_show')) {
            $('.burger-menu').removeClass('burger-menu_show');
            setTimeout(() => {
                $('.burger-menu').addClass('burger-menu_hide');
            }, 550);
        }
        setTimeout(() => {
            getPosMenu();
        }, 100);
    });
    getPosMenu();
});

$(window).mousewheel(function (e) {
    if (e.deltaY > 0) {
        $('.header').removeClass('header_up')
    } else if (e.deltaY < 0) {
        $('.header').addClass('header_up')
    }
    getPosMenu();
});

const getPosMenu = () => {
    let scrollPos = $(window).scrollTop();
    if (scrollPos > 0) {
        $('.header').addClass('header__fixed');
    } else {
        $('.header').removeClass('header__fixed');
    }
};

$('.show-modal').on('click', function () {
    showModal('show');
    $('.modal__input-type').val($(this).data('but'));
});

$('.modal__close').on('click', function () {
    showModal('hide');
});

const showModal = (action) => {

    if (action === 'show') {
        $('.modal').removeClass('modal__hide');
        setTimeout(() => {
            $('.modal').addClass('modal__show');
        }, 10);
    } else {
        $('.modal').removeClass('modal__show');
        setTimeout(() => {
            $('.modal').addClass('modal__hide');
            $('.modal__button').html('Оставить заявку');
        }, 510);
    }
};

$('form').on('submit', function (e) {
    if (!$(this).hasClass('tinkoff-form')) {
        e.preventDefault();
        var domElem = $(this);
        var form_data = $(this).serialize();
        setTimeout(function () {
            domElem.trigger('reset');
        }, 500, domElem);
        $.ajax({
            type: "POST", //Метод отправки
            url: "/send.php", //путь до php фаила отправителя
            data: form_data
            , success: function () {
                domElem.find('button').html('Отправлено');
                setTimeout(()=>{
                    showModal('hide');
                },2000);
            }
            , error: function () {
                domElem.find('button').html('Отправлено');
                console.log('Ошибка! Обратитесь к администратору');
            }
        });
    }
});


$('.burger').on('click', () => {
    $('.burger-menu').removeClass('burger-menu_hide');
    setTimeout(() => {
        $('.burger-menu').addClass('burger-menu_show');
    }, 10);
});

$('.burger-menu').on('click', (e) => {
    if (e.target.classList.contains('burger-menu__bg') || e.target.offsetParent.classList.contains('burger-menu__close')) {
        $('.burger-menu').removeClass('burger-menu_show');
        setTimeout(() => {
            $('.burger-menu').addClass('burger-menu_hide');
        }, 550);
    }
});
$('.about__img').on('click', (e) => {
    e.target.muted = !e.target.muted;
});

$('.why-15').on('click', function (e) {
    $('#hide-15').slideToggle('slow');
    $(this).addClass('d-none');
});