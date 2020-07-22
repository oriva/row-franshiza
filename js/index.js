$().ready(() => {
    let priceVal=100, margVal=50, clientVal=2, mouthVal=5, totalVal;
    setTimeout(() => {
        var spiwsuper = new Swiper('.slider-we-do', {
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            // },
            // width: 1210,
            slidesPerView: 4,
            spaceBetween: 30,
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
});

