$(document).ready(function(){
    $('.single-item').slick({
        autoplay:true,
        Infinity:true,
        speed:300,
        prevArrow:'<i class="fas fa-chevron-left prev_icon"></i>',
        nextArrow:'<i class="fas fa-chevron-right next_icon"></i>'
    });
    $('.multiple-items').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite:true,
        autoplay:true,
        prevArrow:'<i class="fas fa-chevron-left prev_icon"></i>',
        nextArrow:'<i class="fas fa-chevron-right next_icon"><i>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false,
              prevArrow:'<i class="fas fa-chevron-left prev_icon"></i>',
              nextArrow:'<i class="fas fa-chevron-right next_icon"><i>',
            },
            
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              prevArrow:'<i class="fas fa-chevron-left prev_icon"></i>',
              nextArrow:'<i class="fas fa-chevron-right next_icon"><i>',
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              prevArrow:'<i class="fas fa-chevron-left prev_icon"></i>',
              nextArrow:'<i class="fas fa-chevron-right next_icon"><i>',
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ],
        
      });
     
    $('#nav-icon').click(function(){
      $('#cross-icon').css({display:'block'})
      $('#cross-icon').click(function(){
        $(this).hide()
        $('nav ul').fadeOut(300)
      })
      $('nav ul').css({opacity:'1',visibility:'visible'}).fadeIn(300)
  
      return false
    })
    
    $('.multiple-items button').hide();
    
    
$('.responsive').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  autoplay:true,
  slidesToScroll: 1,
  prevArrow:'<i class="fas fa-chevron-left prev_icon"></i>',
  nextArrow:'<i class="fas fa-chevron-right next_icon"><i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



$('.responsive-2').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay:true,
  prevArrow:'<i class="fas fa-chevron-left prev_icon"></i>',
  nextArrow:'<i class="fas fa-chevron-right next_icon"><i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
        
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});




$('.responsive-3').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay:true,
  prevArrow:'<i class="fas fa-chevron-left prev_icon"></i>',
  nextArrow:'<i class="fas fa-chevron-right next_icon"><i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.responsive-3 button:first').html('<i class="fas fa-chevron-left"></i>');
$('.responsive-3 button:last').html('<i class="fas fa-chevron-right"></i>')


var fix_menu=$('#movies').offset().top;

$(window).scroll(function(){
  var scroll_top = $(this).scrollTop();

  if(scroll_top > fix_menu){
      $('header').addClass('menu_fix');
      
  }
  else{
    $('header').removeClass('menu_fix');
  }

})


})