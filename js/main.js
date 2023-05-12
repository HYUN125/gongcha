    // swiper js
    new Swiper(".mySwiper", {
        autoplay: true,

        speed:2000,
        delay: 8000,
        loop: true,
      navigation: {
        clickable : true,
        nextEl: ".btn-next",
        prevEl: ".btn-prev",
      },
      pagination: {
        clickable : true,
        el: ".swiper-pagination",
      },
    });


$(function(){
  $('nav').mouseenter(function(){
    $('header').stop().animate({height:'360px'},300);
  })
  $('header').mouseleave(function(){
     $('header').stop().animate({height:'80px'},300);
  })

  $('header nav .main > li').mouseenter(function(){
    $(this).addClass('on')
  })
  
  $('#drive .d-4box > span').mouseenter(function(){
    $('#drive .d-4box > span > a').addClass('animate__animated animate__tada')
  })
  $('#drive .d-4box > span').mouseleave(function(){
    $('#drive .d-4box > span > a').removeClass('animate__animated animate__tada')
  })

  const tabAnchor = $('.tabs-nav li a'),
  tabPanel = $('.tabs-panel')

  // 링크 클릭 시 할 일
  tabAnchor.click(function(e){
  e.preventDefault();
  tabAnchor.removeClass('active');
  $(this).addClass("active")
  tabPanel.hide(); // = display:none효과
  let target = $(this).attr('href')
  $(target).show();
  })

  tabAnchor.eq(0).trigger("click")
  // 배열 중 0번 (첫번째li)를 첫화면에 클릭 시켜놔라

  $(window).scroll(function(){
      if($(this).scrollTop()>=300){
          // go_top(버튼) 나타난다
          $('.gotop').fadeIn(),
          $('.gotop').addClass('animate__animated animate__bounce')
      }else{
          // go_top(버튼) 사라진다
          $('.gotop').fadeOut(300)
      }

      if($(this).scrollTop()>=200){
        $('.work-section .section-header h1').addClass('animate__animated animate__fadeInDown'),
        $('.work-section .tabs-nav').addClass('animate__animated animate__fadeInDown')
      }
      
  })

  // 모바일메뉴
  const all_menu = $('.all-menu')
  const all_menu_wrapper = $('.all-menu-wrapper')
  const all_menu_mask = $('.all-menu-mask')
  const all_menu_close = $('.all-menu-close')
  // class 명이라는 말이 앞에 잇음 . 안찍어도됨

  all_menu.click(function(){
      // all_menu_wrapper.ClassList.add('클래스명')
      all_menu_wrapper.addClass('all-menu-wrapper-active')
      all_menu_mask.addClass('all-menu-mask-active')
  })
  // all_menu.addEventListener('click',function()) 똑같음
  all_menu_close.click(function(){
      all_menu_wrapper.removeClass('all-menu-wrapper-active')
      all_menu_mask.removeClass('all-menu-mask-active')
  })

  // 모바일메뉴 기능
  // 모바일메뉴버튼 .mb-bt 저장해서 활용
  $('.mb-bt').click(function(e){
      e.preventDefault();
      // a 태그의 기능을 무시하자 prevent
      $('.mb-bt').toggleClass('mb-bt-open')
      // $(this).toggleClass('mb-bt-open') 이름 똑같으면 this 적으면됨
      // 햄버거 모양 바뀌는 것
      $('.mb-menu-mask').toggleClass('mb-menu-mask-active')
      $('.mb-nav').toggleClass('mb-nav-open')
      $('.mb-menu > li').height(50)
  })
      //모바일메뉴 펼치기
    // 1. 모바일 메뉴 불러오기
    const mb_mainmenu = $('.mb-mainmenu')
    // 2. 모바일 서브메뉴 불러오기
    const mb_submenu = $('.mb-submenu')
    // 3. 펼쳐진 서브메뉴의 높이값
    let mb_submenu_height = []; //배열
    // 4. 높이값 계산 실행
    // 배열명.foreach(function(item, index){할일}) each, foreach 구분
    $.each(mb_submenu, function(index){
        // 각각의 mb-submenu로 가서 li의 개수 파악
        // this = mb-submenu
        let count = $(this).find('li').length;
        // console.log(count) // 숫자 나오는지 확인하기
        // 최종결과 저장 = 51px*count+10(위아래 padding)
        mb_submenu_height[index]=46*count;
    })
    let mb_li = $('.mb-menu > li')
    console.log(mb_mainmenu)
    $.each(mb_mainmenu, function(index){
        $(this).click(function(e){
            e.preventDefault();
            // mb-mainmenu-open 있으면 펼치고 없으면 닫기
            // let active = this.contains('')
            $(this).parent().siblings().children().removeClass('mb-mainmenu-open')
            // 서브메뉴 2번 클릭 하는거 고침
            $(this).toggleClass('mb-mainmenu-open')
            let active = $(this).hasClass('mb-mainmenu-open')
            if(active){
                // 해당되는(클릭된) li>a(depth1)의 ul의 높이값을 temp에 저장
                let temp = mb_submenu_height[index]
                // 해당요소의 높이 부여. eq=equal
                //             .style.height = `${temp}+54`
                mb_li.eq(index).height(temp+50)
                mb_li.eq(index).siblings().height(50)
                // 0번째 li = ul 첫번째의 li = submenu의 첫번째 li
            }else{ //클릭이 안된 경우
                mb_li.eq(index).height(50)
            }
        })
    })


// if (topPos > 10)
  $('.gotop').click(function(e){
      e.preventDefault();
      $('html, body').stop().animate({scrollTop:0},1000);
  });

  // 배너슬라이드 비디오
  $("#videoPlayer").fitVids();


  // divTop = document.querySelector("#tea > h1").scrollTop;
  // console.log(divTop)

});
  

 


