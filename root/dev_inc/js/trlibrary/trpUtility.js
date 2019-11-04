/*
 * Base			: jQuery JavaScript Library v1.12.1
 * trPackage	:
 * trpPopup	    : v0.72
 * release date : 2019.01.17
 * author		: http://turfrain.tistory.com/
 * Copyright 2019. turfrain all rights reserved.
 *
 */


'use strict';
/**
 * @example
 * trpNumReturn()
 *
 * 
 * trpNumReturn		                : 숫자 값이 있는지를 판단하여 값이없으면 기본값(0)을 리턴한다.
 * @param {Number}  [$val=0]		: 숫자 값변수	   (필수)
 * @param {Number}$default          : 기본값 세팅	   (선택)
 * @returns {Number}                : 가본값을 던지면 기본값으로, 
 */
function trpNumReturn ($val, $default){
	if ($val == undefined){
		$val = 0;
		if ($default){$val = $default;}
	}
	return $val;
}


/**
 * trpStrReturn		: 문자 값이 있는지를 판단하여 값이없으면 기본값("")을 리턴한다.
 * @param $val		: 문자 값변수   (필수)
 * @param $default  : 기본값 세팅   (선택)
 */
function trpStrReturn ($val, $default){
	if ($val == undefined){
		$val = "";
		if ($default){$val = $default;}
	}
	return $val;
}


/* ie브라우저 검사 */
jQuery.browser={};(function(){jQuery.browser.msie=false;jQuery.browser.version=0;if(navigator.userAgent.match(/MSIE ([0-9]+)\./)){jQuery.browser.msie=true;jQuery.browser.version=RegExp.$1;}})();

/* 
 * date : 20141105
 * trpBrowser		: 브라우저 정보를 리턴함.
 * @method name		: 브라우저 이름
 * @method version	: 브라우저 버젼
*/ 

var trpBrowser = (function() {
	var s = navigator.userAgent.toLowerCase();
	var match
		match =	  /(opr)[ \/]([\w.]+)/.exec(s) || 					// 오페라
				  /(chrome)[ \/]([\w.]+)/.exec(s) || 				// 크롬
				  /(version)[ \/]([\w.]+)/.exec(s) ||				// 사파리					
				  /(msie) ([\w.]+)/.exec(s) ||						// ie  
				  /(appleWebKit)[ \/](\w.]+)/.exec(s) ||			// 웹킷
				  /(mozilla)(?:.*? rv:([\w.]+))?/.exec(s) ||		// 모질라(파이어폭스)
				 [];
	// *ie11버젼 	"msie" 없어짐.
	if(navigator.msManipulationViewsEnabled) {     match[1]= "msie"; };
	// *사파리
	if(match[1]== "version") {     match[1]= "safari"; };

  return { name: match[1] || "", version: match[2] || "0" };
}());

/**
* trpNumCommas			:  숫사 컴마 숫자를 넣으면 3자리수마다 "," 있는 문자열을 리턴
* @param {String} $x	: 문자 값변수   (필수)
*/
function trpNumCommas($x) {
    return $x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


/**
* trpNumberFormat		: 숫자를 넣으면 3자리수마다 "," 있는 문자열을 리턴
*  @param {String} $num	: 문자 값변수   (필수)
*/
function trpNumberFormat($num) {
	var num = $num.replace(/,/g, "")
	var num_str = num.toString()
	var result = ''
	for(var i=0; i<num_str.length; i++) {
		var tmp = num_str.length-(i+1)
		if(i%3==0 && i!=0) result = ',' + result
			result = num_str.charAt(tmp) + result
		}
	return result;
}


/** 
 * trpRangeRatio			:  참고값을 비레해 타겟값을 추출
 *			$rMin 값과 $rMax 값의 $rTar 위치를 비율을    $tMin 값과 $tMax 값의 에서 같은 비율로 찾아줍니다.
 * 			
 * @param	$rMin			: Refer 참고 최소 값		
 * @param	$rMax			: Refer 참고 최대 값	
 * @param	$rTar			: Refer 참고 변화 값
 * @param	$tMin			: target타겟 최소값
 * @param	$tMax			: target타겟 최대값 
 * @return					: 참고값을 비레해 타겟값을 추출; 
 */
function trpRangeRatio($rMin, $rMax, $rTar, $tMin, $tMax ){

	var rMin 	= 0;					// Refer 참고 최소 값		
	var rMax	= $rMax - $rMin;		// Refer 참고 최대 값	
	var rTar 	= $rTar - $rMin;		// Refer 참고 변화 값
	var rPer;							// Refer 참고 변화 퍼센트
	var tMin 	= 0;					// target타겟 최소값
	var tMax	= $tMax - $tMin;		// target타겟 최대값 
	
	//rPer = Math.abs(rTar) / rMax  // 퍼센테지	== 100% => 1.0
	rPer = rTar / rMax				// 퍼센테지	== 100% => 1.0
				
	return (tMax * rPer)+ $tMin;	// 참고 비례 타겟값
}



/** 
 * trpUtilityChangeOnce		: 값이 달라질때 1번만 실행함수
 * @param	$value			: 변동되는 값		
 * @param	$activeFn		: 실행할 함수
*/
var trpUtilityChangeOnce_newVal;
var trpUtilityChangeOnce_oldVal = "";
function trpUtilityChangeOnceFN($value, $activeFn){
    trpUtilityChangeOnce_newVal = $value;
    //console.log( trpUtilityChangeOnce_newVal + " :  " + trpUtilityChangeOnce_oldVal)
    if(trpUtilityChangeOnce_newVal == trpUtilityChangeOnce_oldVal){ return;}
    $activeFn(trpUtilityChangeOnce_newVal);
    trpUtilityChangeOnce_oldVal = trpUtilityChangeOnce_newVal;
  }// end fn


/**
*  trpClassBubbleCheck : 클릭 이벤트로 타겟 대상의 부모클래스가 있는지를 체크
*  @param	{String}   $classNmae	
*  @param	{function} $activeFn(boolean)
*/
function trpClassBubbleCheck( $className, $activeFn){     
   
    $(document).on("click", function ($e) {
        var _true_false = false;
        if($($e.target).closest($className).length){
            _true_false = true;
        }else{
            _true_false = false;
        }
        $activeFn(_true_false);
    });   
}




/*
  trpUtilityChangeOnceFnFn	    : 함수 한번만 실행
* @param	$functionTrue	    : true 일때 실행되는 함수
* @param	$functionFalse	    : false 일대 실행되는 함수
* @method   setBoolean(boolean)	: true, false 값넘기기
* var onceFn = $("body").trpUtilityChangeOnceFn(function(){console.log("aaa")}, function(){ console.log("bbb")})
* onceFn.change(true);
*/
jQuery.fn.trpUtilityChangeOnceFnFn = function($functionTrue, $functionFalse) {
    var _onlyFnB = undefined;
    var _firstB  = true;
    function onceFn($boolean) { 
        if ($boolean) {            // true 실행;
            if (_onlyFnB) {        // 1번실행;
                $functionTrue();   // console.log("true" , _onlyFnB);
                _onlyFnB = false;
            }
        } else {                   // flase 실핼;
            if (!_onlyFnB) {       // 1번실행;
                $functionFalse();  // console.log("false" , _onlyFnB);
                _onlyFnB = true;
            }
        }
    }
    return {
        setBoolean: function($boolean) { 
            if(_firstB){
                _onlyFnB = $boolean;
                _firstB = false;
            }
            onceFn($boolean);
        }
    }
}


/*
* trpRemoveClassPrefix          : 특정문자열로 시작되는 클래스 삭제
* @param	$prefix			    : 특정문자열
*/
jQuery.fn.trpRemoveClassPrefix = function($prefix) {
    this.each(function(i, el) {
        var classes = el.className.split(" ").filter(function(c) {
            return c.lastIndexOf($prefix, 0) !== 0;
        });
        el.className = $.trim(classes.join(" "));
    });
    return this;
};

