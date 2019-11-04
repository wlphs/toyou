$(function(){
    console.log("common.js"); 

    $('.js-gnb_btn').on('click', function() {
      $('#gnb .nav_box').addClass('on');
      $('.wrapper').addClass('content_push');
    })
    $('.js-close_gnb').on('click', function() {
      $('#gnb .nav_box').removeClass('on');
      $('.wrapper').removeClass('content_push');
    })
    
    
}); //.ready() called.


function formatNumber(num) {
  console.log(num);
  console.log(num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

jQuery.fn.setTabType = function( $activeTabNum){
	var _this= this;
	if ($('.tab_menu li', _this).length < 4) $('.tab_menu', _this).addClass('handful');
  if ($('.tab_menu li', _this).length ==2 ) $('.tab_menu', _this).addClass('tab_col2');
  if ($('.tab_menu li', _this).length ==3 ) $('.tab_menu', _this).addClass('tab_col3');
	
	$('.tab_menu li a', _this).on('click', function() {
		var idx = $(this).closest('li').index( );
    selectTab(idx);
    console.log(idx);
		return false;
	});
	selectTab($activeTabNum);
	function selectTab(num) {
		var _cont = $('.tab_cont_wrap', _this);
		var _li = $('.tab_menu li', _this).eq(num);
		
		$('.tab_menu li', _this).removeClass('on')
		_li.addClass('on');
		
		$('.tab_cont', _cont).hide();
		$($('a',_li).attr('href'), _cont).show();
	}
	function setWidth() {
    var _menu_width = 0;
    if ($('.tab_menu', _this).hasClass('handful')) {
      return false;
    }
		for (var i= 0; i < $('.tab_menu li', _this).length; i++) {
			_menu_width += $('.tab_menu li', _this).eq(i).width() + parseInt($('.tab_menu li', _this).eq(i).css('margin-left')) + parseInt($('.tab_menu li', _this).eq(i).css('margin-right'));
			
		}
		$('.tab_menu', _this).width(_menu_width +1 ); 
	}
	setWidth();
	$(window).on('load',function() {
    setWidth();
  });
}


/**
 * trpAccordionMenu				: 아코디언메뉴
 * @param	$btn				    : 버튼 클래스 선택자 이름
 * @param	$cont				    : 컨텐츠 클래스 선택자 이름
 * @param	$activeClass		: 활성화 class 이름
 * @method	setBtn($index): 활성화 인덱스를 넣으면 해당컨텐츠 활성화
 */
jQuery.fn.trpAccordionMenu = function($btn, $cont, $activeClass, $activeFN ){
  var _index=0, _old_index;
  var _this = this;
  $activeClass = ($activeClass)? $activeClass : "on";				// activeClass 없으면 on으로 체크

  $(_this).find($btn).each(function($index){
      $(this).closest("li").attr("data-index", $index);
  });

$(this).on("click", $btn, function ($e) {
  $e.preventDefault();
  _index = $(this).closest("li").attr("data-index");
  active(_index);
  _old_index = _index;
});

  function active($index){ 
    if ( $index < 0) { return; } 				// 0 보다 작으면 아무것도 하지 않는다.
    
    //if( $(_this).find(">li").eq($index).hasClass($activeClass) ){ 
    if( $(_this).find(">li[data-index = "+$index+"]").hasClass($activeClass) ){  
      $(_this).find(">li").removeClass($activeClass);
      $(_this).find($cont).slideUp();
      if($activeFN){
        var _return = $activeFN($index);		// 인텍스리턴
      }
      return false;
    } // 활성화되어있으면 전부 닫침.

    $(_this).find(">li").removeClass($activeClass);
    $(_this).find(">li[data-index = "+$index+"]").addClass($activeClass);

    $(_this).find($cont).slideUp();

    if($activeFN){
      var _return = $activeFN($index);		// 인텍스리턴
    }
    
    $(_this).find(">li[data-index = "+$index+"]").find($cont).slideDown();
  }

  return {
    setBtn: function($index) {
        active($index);
  }
  }
}



function ModalFixedControl() {
  this.trpLayerFixedPopupScroll_top = 0;
  this.dialog;
}
ModalFixedControl.prototype.open = function(_dialog) {
  var _self = this;
  this.dialog = _dialog;
  console.log('open')
  this.trpLayerFixedPopupScroll_top = $(window).scrollTop();
  $("html, body").scrollTop(0);
  $(".wrapper").css({ position:"fixed",     top: (this.trpLayerFixedPopupScroll_top * -1) });
  setTimeout(function() {
    $(window).one('hashchange', function() {
      $(_self.dialog).dialog( "close" );
      console.log('change', window.location.hash, _self)
    });
  }, 100)
}
ModalFixedControl.prototype.close = function() {
  window.location.href="#";
  $(".wrapper").css({ position:"relative",  top:"0" });
  $("html, body").scrollTop(this.trpLayerFixedPopupScroll_top);
}
var modalFixedControl = new ModalFixedControl();


