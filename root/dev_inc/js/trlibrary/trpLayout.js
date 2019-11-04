
/*
trpScrollPositionReturn         : 스크롤 움직임에 따라 타겟 높이 값을 변경하여 따라다니게 한다.
* @option	positionTar		    : 적용할 타겟 선택자            (기본값 : this)
* @option	heightTar			: 적용할 타켓 높이값            (기본값 : this.height)
* @option	showHeight			: 적용할 타겟 보여질 위치        (기본값 : window.height)
* @option	bottonTar		    : 적용할 타겟 하단 여백          (기본값 : 50)
* @option	bottomStop		    : 적용할 타겟 하단 멈추어야할 위치 (기본값 : 100)
*/
jQuery.fn.trpScrollSync =  function( options ){
    var _this = this;
    var wH    = $(window).height();
    var winST = $(window).scrollTop();
    var docH  = $(document).height();
    var settings = {
        postionTar : _this  ,                // 스크롤 타겟 선택자
        heightTar  : _this.height  ,         // 스크롤 타켓 높이값
        showHeight : wH  ,                   // 스크롤 보여질 위치
        bottonTar  : 50  ,                   // 타겟 하단 여백
        bottomStop : 100 ,                   // 하단기준 멈춰야할 위치
    };
    settings = jQuery.extend(settings, options || {});
    
   
    var _bottomSpace = (settings.bottonTar + settings.heightTar);   // 스크롤 시 하단 간격 + 타겟높이
    var _bottomStop  = settings.bottomStop - settings.bottonTar;    // 멈출 위치 
    
    
    $(window).on("scroll resize", function($e){
        scrollResizeSyncWatch();
    });
    function scrollResizeSyncWatch(){
        wH    = $(window).height();
        winST = $(window).scrollTop();
        docH  = $(document).height();
        
        // scroll_top view
        if( winST < settings.showHeight ){   // winST < wH
            $(".scroll_top").fadeOut();
        } else {
            $(".scroll_top").fadeIn();
        }

        // scroll top botton hold
        if( (winST + wH)  > (docH - _bottomStop) ){
            var temp1 = (docH - _bottomStop - _bottomSpace);
            $(".scroll_top").css({top : temp1});
        } else {
            var temp2 = (wH - _bottomSpace) + winST;
            $(".scroll_top").css({top : temp2 , bottom: "auto" });
        }

        // 해더 위치, 팝업 이 없을때만..
        if( $(".wrapper").attr("data-pop") != "on" ){
            //$("#header").css({top : winST});
        }
    }
    scrollResizeSyncWatch();
}



/*
trpScrollPositionClass          : 스크롤타겟위치에서 타겟클래스변경
* @param	$scrollTar			: 기준 타겟 위치 선택자
* @param	$scrollTarModi		: 기준 타겟 위치 가감 수치
* @param	$addTar				: 적용 타겟 선택자
* @param	$addTarClass		: 적용 타겟 class 이름
*/
jQuery.fn.trpScrollPositionClass = function($scrollTar, $scrollTarModi, $addTar, $addTarClass) {

    var _scrolWin = $(window).scrollTop();
    var _scrolTag = 0;
    var _only = "defaul"; // over, under
    
    // 선텍자 체크
    if( $scrollTar != "" && $($scrollTar).length > 0  ){ _scrolTag = $($scrollTar).offset().top;  }  
    
    // 숫자 체크
    if( isNaN($scrollTarModi) == false)    { _scrolTag = _scrolTag + ($scrollTarModi); }  
    
    $(window).on("scroll resize", function($e){
        scrollResizeClassWatch()
    });
    function scrollResizeClassWatch(){
        _scrolWin = $(window).scrollTop();
        if (_scrolWin >= _scrolTag) {
            if (_only != "over") { $($addTar).addClass($addTarClass); }
            _only = "over";
        } else {
            if (_only != "under") { $($addTar).removeClass($addTarClass); }
            _only = "under";
        }
    }
    scrollResizeClassWatch();
    
};


/*
trpScrollPositionWindowClass    : 스크롤타겟위치에서 윈도우높이 절반 타겟클래스변경
* @param	$scrollTar			: 기준 타겟 위치 선택자
* @param	$scrollTarModi		: 기준 타겟 위치 가감 수치
* @param	$addTar				: 적용 타겟 선택자
* @param	$addTarClass		: 적용 타겟 class 이름
*/
jQuery.fn.trpScrollPositionWindowClass = function($scrollTar, $scrollTarModi, $addTar, $addTarClass) {

    var _scrolWin = $(window).scrollTop();
    var _scrolTag = 0;
    var _only = "defaul"; // over, under
    
    // 선텍자 체크
    if( $scrollTar != "" && $($scrollTar).length > 0  ){ _scrolTag = $($scrollTar).offset().top;  }  
    
    // 숫자 체크
    if( isNaN($scrollTarModi) == false)    { 
        _scrolTag = _scrolTag + ( $(window).height() / 2 ) + ($scrollTarModi); 
    }  
    
    $(window).on("scroll resize", function($e){
        scrollResizeClassWatch()
    });
    function scrollResizeClassWatch(){
        _scrolWin = $(window).scrollTop();
        if (_scrolWin >= _scrolTag) {
            if (_only != "over") { $($addTar).addClass($addTarClass); }
            _only = "over";
        } else {
            if (_only != "under") { $($addTar).removeClass($addTarClass); }
            _only = "under";
        }
    }
    scrollResizeClassWatch();
    
};

