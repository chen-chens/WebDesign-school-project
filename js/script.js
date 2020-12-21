
/*-----------------------------大圖輪播-----------------------------*/
$(function(){
    $('#banner_pc').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 2500,
        fade: true,
        cssEase: 'ease-in-out'
        });
    $('#banner_lp').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 2500,
        fade: true,
        cssEase: 'ease-in-out'
        });
    $('#banner_sp').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 2500,
        fade: true,
        cssEase: 'ease-in-out'
        });
    
});

/*-----------------sp navbar fixed on top when scroll-------------------*/
$(function(){
	
	$(window).scroll(function(){
		if($(window).scrollTop() <= 40){
			$('#sp_header').removeClass('scrolleffect');
		} else {
            $('#sp_header').addClass('scrolleffect');

		}
	});
});


/*-----------------sp navbar fixed on top when scroll-------------------*/

/*----------------pc+lp navbar fixed on top when scroll-----------------*/
$(function(){
	
	$(window).scroll(function(){
		if($(window).scrollTop() <= 40){
			$('#main_header').removeClass('scrolleffect');
		} else {
            $('#main_header').addClass('scrolleffect');

		}
	});
});

/*----------------pc+lp navbar fixed on top when scroll-----------------*/

    
/*-----------------------------手機menu動畫-----------------------------*/

/*手機側選單點擊錨點消失*/
$(function(){
    $('#sp_nav a').on('click',function(){
        $('#sp_nav').toggle(1000);

    });
});

$(function(){
    var j = 1;  //變數j為點擊次數
    $('.menu').click(function(){
        if(j % 2 == 1)
            $('#sp_nav').fadeIn(500);
        else{
            $('#sp_nav').fadeOut(500);
        }
        j++;
    });
});

/*-----------------------------校園公告頁籤-----------------------------*/

$(function(){
        
    $('ul.new_tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.new_tabs li').removeClass('current');
        $('.category-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    });

});

/*-----------------------------探索課程slider-----------------------------*/  
 $(function(){
    $('.lesson_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [
            {
                breakpoint: 1025,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 789,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }

        ]

    });
});


/*-----------------------------線上客服-----------------------------*/  


// <!--Start of Tawk.to Script-->
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/5eddbdd44a7c6258179a1f4f/default';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
    })();
// <!--End of Tawk.to Script-->