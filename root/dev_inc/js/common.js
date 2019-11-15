$(function(){
  
  $('#footer .js-open').click(function(){
      $(this).toggleClass('on');
  });

  $(window).scroll(function () {
    let _st = $(window).scrollTop(),
        _h = $(window).height(),
        _ft, _toppos =0;
    if ($('#footer').length) {
      _ft = $('#footer').offset().top;
      _toppos = _st-_ft+_h+20;
    }
    if (_st > 100) $('.top_scroll').stop().fadeIn();
    else $('.top_scroll').stop().fadeOut();
    $('.top_scroll').css('bottom', (_toppos < 20) ? 20 : _toppos + "px")
  });
  $(".top_scroll").on("click", function(){
    $( 'html, body' ).animate( { scrollTop: 0 }, 200 );
  });
  
  $('.btn_bottom_fixed').each(function() {
    $(this).height($(this).find('.fixed_wrap').innerHeight());
  })
    
}); //.ready() called.

function openSnippet(msg) {
  var ran = Math.floor(Math.random()*10000000);
  $('body').append('<div class="snippet_wrap js-snippet_wrap'+ran+'"><p class="snippet_cont">'+msg+'</p></div>')
  var snippet = $('.js-snippet_wrap'+ran);
  if ($('#contents .btn_bottom_fixed').length) {
    snippet.css('bottom', $('#contents .btn_bottom_fixed').innerHeight());
  }
  $('.snippet_cont',snippet).animate({"top":0}, 300).delay(2000).fadeOut(300, function () {
    snippet.remove();
  });
}


function formatNumber(num) {
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
jQuery.fn.coverImage = function(){
  
  $(this).each(function() {
    var _img = $(this),
        _wrap =  $(this).parent(), 
        _w = _wrap.width(),
        _h = _wrap.height();

    if (_img.width()/_img.height()> _w/_h) {  // 가로가 더 길 때
      _img.css({'width':'auto', 'height' : '100%'});
      _img.css({'margin-top': 0, 'margin-left':( _w - _img.width())/2 });
    }
    else {
      _img.css({'width':'100%', 'height' : 'auto'});
      _img.css({'margin-left': 0, 'margin-top':( _h - _img.height())/2 });
    }
  })
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
  this.trpLayerFixedPopupScroll_top = $(window).scrollTop();
  $("html, body").scrollTop(0);
  $(".wrapper").css({ position:"fixed",     top: (this.trpLayerFixedPopupScroll_top * -1) });

}
ModalFixedControl.prototype.close = function() {
  $(".wrapper").css({ position:"relative",  top:"0" });
  $("html, body").scrollTop(this.trpLayerFixedPopupScroll_top);
}
var modalFixedControl = new ModalFixedControl();


