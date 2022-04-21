
(function ($) {
  // Config OWL2
    // Config Slick
    var slickClass = $('.js-slick');
    slickClass.each(function () {
        var option = {
            accessibility: true,
            adaptiveheight: false,
            autoplay: false,
            autoplayspeed: 5000,
            arrows: false,
            asnavfor: null,
            appendarrows: $(this),
            appenddots: $(this),
            prevarrow: '<button type="button" class="slick-prev">Previous</button>',
            nextarrow: '<button type="button" class="slick-next">Next</button>',
            centermode: false,
            centerpadding: '50px',
            cssease: 'ease',
            dots: false,
            dotsclass: 'slick-dots',
            draggable: true,
            fade: false,
            speed: 500,
            pauseonhover: false,
            lg: 1, md: this.lg, sm: this.md, xs: this.sm,
            vertical: false,
            loop: true,
            thumb: false

        };

        for (var k in option) {
            if (option.hasOwnProperty(k)) {
                if ($(this).attr('data-slick-' + k) != null) {
                    option[k] = $(this).data('slick-' + k);
                }
            }
        }

        if (option.thumb)
            $(this).slick({
                accessibility: option.accessibility,
                adaptiveHeight: option.adaptiveheight,
                autoplay: option.autoplay,
                autoplaySpeed: option.autoplayspeed,
                arrows: option.arrows,
                asNavFor: option.asnavfor,
                appendArrows: option.appendarrows,
                appendDots: option.appenddots,
                prevArrow: option.prevarrow,
                nextArrow: option.nextarrow,
                centerMode: option.centermode,
                centerPadding: option.centerpadding,
                cssease: option.cssease,
                dots: option.dots,
                dotsClass: option.dotsclass,
                draggable: option.draggable,
                pauseOnHover: option.pauseonhover,
                fade: option.fade,
                vertical: option.vertical,
                slidesToShow: option.lg,
                infinite: option.loop,
                swipeToSlide: true,
                customPaging: function(slick, index) {
                    var portrait = $(slick.$slides[index]).data('thumb');
                    return '<img src=" ' + portrait + ' "/><div class="bg-overlay"></div>';
                },

                responsive: [
                    {
                        breakpoint: 1600,
                        settings: {
                            slidesToShow: option.lg
                        }
                    },
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: option.md
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: option.md
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: option.sm
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: option.xs
                        }
                    }
                ]
            });
        else
            $(this).slick({
                accessibility: option.accessibility,
                adaptiveHeight: option.adaptiveheight,
                autoplay: option.autoplay,
                autoplaySpeed: option.autoplayspeed,
                arrows: option.arrows,
                asNavFor: option.asnavfor,
                appendArrows: option.appendarrows,
                appendDots: option.appenddots,
                prevArrow: option.prevarrow,
                nextArrow: option.nextarrow,
                centerMode: option.centermode,
                centerPadding: option.centerpadding,
                cssease: option.cssease,
                dots: option.dots,
                dotsClass: option.dotsclass,
                draggable: option.draggable,
                pauseOnHover: option.pauseonhover,
                fade: option.fade,
                vertical: option.vertical,
                slidesToShow: option.lg,
                infinite: option.loop,
                swipeToSlide: true,

                responsive: [
                    {
                        breakpoint: 1600,
                        settings: {
                            slidesToShow: option.lg
                        }
                    },
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: option.md
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: option.md
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: option.sm
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: option.xs
                        }
                    }
                ]
            });

        $(this).on('init', function() {
            var $firstAnimatingElements = $('div.hero-slide:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        $(this).on('beforeChange', function(e, slick, currentSlide, nextSlide) {
            var $animatingElements = $(this).find('[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });


        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('animation-delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }
    });
})(jQuery);


// pure js below
// back to top
var backButton = document.getElementById("backToTop");
var menu = document.getElementById("menu");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    backButton.style.display = "block";
    setTimeout(function() {
        backButton.style.opacity = 1;
    },500)
    menu.style.position = "fixed";
  } else {
    backButton.style.opacity = 0;
    backButton.style.display = "none";
    menu.style.position = "relative";
  }
}

function goTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
    
// menu prevent close
var element = document.getElementById('menu_links'); 
var menu_chk = document.getElementById('show-menu');
element.addEventListener('click', () => {
    let menu_state = menu_chk.checked == false ? false : menu_chk.checked = false;
}); 

// play video
var playVideo = (e)=>{
    let id = e.target.parentNode.id
    let button = document.getElementById(id);
    let video = e.target.parentNode.nextElementSibling.id;
    let audioBtn = document.getElementById('bt_mute');
    // console.log(e.target.parentNode.nextElementSibling.id)
    button.style.display = 'none';
    audioBtn.style.opacity = 1;
    document.getElementById(video).play();
}

const spokeVideo = document.getElementById('spokeVideo');
var muteVideo = () => {
  spokeVideo.muted == true ? mute() : unmute();
}

let mute = () => {
  audioBtn = document.getElementById('audioBtn');
  audioBtn.classList.remove('fa-volume-mute')
  audioBtn.classList.add('fa-volume-up')
  spokeVideo.muted = false
}
let unmute = () => {
  audioBtn = document.getElementById('audioBtn');
  audioBtn.classList.add('fa-volume-mute')
  audioBtn.classList.remove('fa-volume-up')
  spokeVideo.muted = true
}




