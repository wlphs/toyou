"use strict";

//.ready() called.
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

function ModalFixedControl() {
    this.trpLayerFixedPopupScroll_top = 0, this.dialog;
}

$(function() {
    $("#footer .js-open").click(function() {
        $(this).toggleClass("on");
    }), $(window).scroll(function() {
        var _st = $(window).scrollTop(), _h = $(window).height(), _toppos = 0;
        $("#footer").length && (_toppos = _st - $("#footer").offset().top + _h + 30), 100 < _st ? $(".top_scroll").stop().fadeIn() : $(".top_scroll").stop().fadeOut(), 
        $(".top_scroll").css("bottom", _toppos < 30 ? 30 : _toppos + "px");
    }), $(".top_scroll").on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 200);
    }), $(".btn_bottom_fixed").each(function() {
        $(this).height($(this).find(".fixed_wrap").innerHeight());
    });
}), jQuery.fn.setTabType = function($activeTabNum) {
    var _this = this;
    function selectTab(num) {
        var _cont = $(".tab_cont_wrap", _this), _li = $(".tab_menu li", _this).eq(num);
        $(".tab_menu li", _this).removeClass("on"), _li.addClass("on"), $(".tab_cont", _cont).hide(), 
        $($("a", _li).attr("href"), _cont).show();
    }
    function setWidth() {
        var _menu_width = 0;
        if ($(".tab_menu", _this).hasClass("handful")) return !1;
        for (var i = 0; i < $(".tab_menu li", _this).length; i++) _menu_width += $(".tab_menu li", _this).eq(i).width() + parseInt($(".tab_menu li", _this).eq(i).css("margin-left")) + parseInt($(".tab_menu li", _this).eq(i).css("margin-right"));
        $(".tab_menu", _this).width(_menu_width + 1);
    }
    $(".tab_menu li", _this).length < 4 && $(".tab_menu", _this).addClass("handful"), 
    2 == $(".tab_menu li", _this).length && $(".tab_menu", _this).addClass("tab_col2"), 
    3 == $(".tab_menu li", _this).length && $(".tab_menu", _this).addClass("tab_col3"), 
    $(".tab_menu li a", _this).on("click", function() {
        var idx = $(this).closest("li").index();
        return selectTab(idx), console.log(idx), !1;
    }), selectTab($activeTabNum), setWidth(), $(window).on("load", function() {
        setWidth();
    });
}, 
/**
 * trpAccordionMenu				: 아코디언메뉴
 * @param	$btn				    : 버튼 클래스 선택자 이름
 * @param	$cont				    : 컨텐츠 클래스 선택자 이름
 * @param	$activeClass		: 활성화 class 이름
 * @method	setBtn($index): 활성화 인덱스를 넣으면 해당컨텐츠 활성화
 */
jQuery.fn.trpAccordionMenu = function($btn, $cont, $activeClass, $activeFN) {
    var _index = 0, _this = this;
    function active($index) {
        if (!($index < 0)) {
            // 0 보다 작으면 아무것도 하지 않는다.
            //if( $(_this).find(">li").eq($index).hasClass($activeClass) ){ 
            if ($(_this).find(">li[data-index = " + $index + "]").hasClass($activeClass)) {
                if ($(_this).find(">li").removeClass($activeClass), $(_this).find($cont).slideUp(), 
                $activeFN) $activeFN($index);
 // 인텍스리턴
                                return !1;
            }
 // 활성화되어있으면 전부 닫침.
                        if ($(_this).find(">li").removeClass($activeClass), $(_this).find(">li[data-index = " + $index + "]").addClass($activeClass), 
            $(_this).find($cont).slideUp(), $activeFN) $activeFN($index);
 // 인텍스리턴
                        $(_this).find(">li[data-index = " + $index + "]").find($cont).slideDown();
        }
    }
    return $activeClass = $activeClass || "on", // activeClass 없으면 on으로 체크
    $(_this).find($btn).each(function($index) {
        $(this).closest("li").attr("data-index", $index);
    }), $(this).on("click", $btn, function($e) {
        $e.preventDefault(), active(_index = $(this).closest("li").attr("data-index")), 
        _index;
    }), {
        setBtn: function($index) {
            active($index);
        }
    };
}, ModalFixedControl.prototype.open = function(_dialog) {
    this.dialog = _dialog, this.trpLayerFixedPopupScroll_top = $(window).scrollTop(), 
    $("html, body").scrollTop(0), $(".wrapper").css({
        position: "fixed",
        top: -1 * this.trpLayerFixedPopupScroll_top
    });
}, ModalFixedControl.prototype.close = function() {
    $(".wrapper").css({
        position: "relative",
        top: "0"
    }), $("html, body").scrollTop(this.trpLayerFixedPopupScroll_top);
};

var modalFixedControl = new ModalFixedControl();

$(document).ready(function() {
    function inputdel_fn($this) {
        ///console.log('$this.val()', $this.val());
        var _noneDisable = !$this.prop("disabled");
        "" != $this.val() && _noneDisable ? ($this.siblings("button").css({
            display: "block"
        }), $this.siblings("button").one("click", function() {
            $this.val(""), $this.siblings("button").css({
                display: "none"
            });
        })) : $this.siblings("button").css({
            display: "none"
        });
    }
    $("body").on("keyup focusout", ".input_del input", function() {
        inputdel_fn($(this));
    }), $("body .input_del input").each(function($i) {
        inputdel_fn($(this));
    }), 
    /* ======= 달력 ======= */
    $(".js-datepicker").datepicker(datepicker_yy_mm_dd), 
    /* ======= 달력 -년-월 ======= */
    $(".js-datepicker-yy_mm").datepicker(datepicker_yy_mm), 
    /* ======= 달력  -년 ======= */
    $(".js-datepicker-yy").datepicker(datepicker_yy), 
    /* 일반 툴팁 */
    $(".js-tooltip").tooltip({
        position: {
            my: "center bottom-15",
            at: "center top",
            using: function(position, feedback) {
                $(this).css(position), $("<div>").addClass("arrow").addClass(feedback.vertical).addClass(feedback.horizontal).appendTo(this);
            }
        }
    }), //.tooltip( "open" );
    /* 길설명 툴팁 */
    $(".js-tooltip_sendstate").tooltip({
        position: {
            my: "center bottom-10",
            at: "center top",
            using: function(position, feedback) {
                $(this).css(position);
                var _dotL = feedback.target.left - position.left + 6;
                $("<div>").addClass("arrow").addClass(feedback.vertical).addClass(feedback.horizontal).appendTo(this).css({
                    left: _dotL
                });
            }
        },
        tooltipClass: "tooltip_big",
        items: "img, [data-geo], [title]",
        content: function() {
            var element = $(this), selcet = $(this).attr("data-geo");
            return element.is("[data-geo]") ? ($(".ui-tooltip").css({
                "max-width": "500px;"
            }), $(selcet).html()) : element.is("[title]") ? element.attr("title") : element.is("img") ? element.attr("alt") : void 0;
        }
    }), //.tooltip( "open" );       
    $(".js-all_check");
}), jQuery.fn.allCheckbox = function($check_item) {
    var _all = $(this), len = $($check_item).length;
    _all.on("change", function() {
        $($check_item).prop("checked", $(this).prop("checked"));
    }), $($check_item).on("change", function() {
        _all.prop("checked", $($check_item + ":checked").length == len);
    });
};

var datepicker_yy_mm_dd = {
    dateFormat: "yy-mm-dd",
    showMonthAfterYear: !0,
    //yearSuffix: "년",
    monthNames: [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12" ],
    monthNamesShort: [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12" ],
    dayNamesMin: [ "S", "M", "T", "W", "T", "F", "S" ],
    dayNames: [ "S", "M", "T", "W", "T", "F", "S" ]
}, datepicker_yy_mm = {
    dateFormat: "yy-mm",
    closeText: "close",
    changeMonth: !0,
    changeYear: !0,
    monthNames: [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12" ],
    monthNamesShort: [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12" ],
    dayNamesMin: [ "S", "M", "T", "W", "T", "F", "S" ],
    dayNames: [ "S", "M", "T", "W", "T", "F", "S" ],
    weekHeader: "week",
    firstDay: 0,
    isRTL: !1,
    showMonthAfterYear: !0,
    //showButtonPanel: true,
    onClose: function() {
        var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val(), year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
        $(this).datepicker("option", "defaultDate", new Date(year, month, 1)), $(this).datepicker("setDate", new Date(year, month, 1)), 
        $("#ui-datepicker-div").removeClass("js-yy_mm");
    },
    beforeShow: function() {
        var selectDate = $(".js-datepicker-yy_mm").val().split("-"), year = Number(selectDate[0]), month = Number(selectDate[1]) - 1;
        $(this).datepicker("option", "defaultDate", new Date(year, month, 1)), $("#ui-datepicker-div").addClass("js-yy_mm");
    }
}, datepicker_yy = {
    dateFormat: "yy",
    closeText: "close",
    changeMonth: !0,
    changeYear: !0,
    monthNames: [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12" ],
    monthNamesShort: [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12" ],
    dayNamesMin: [ "S", "M", "T", "W", "T", "F", "S" ],
    dayNames: [ "S", "M", "T", "W", "T", "F", "S" ],
    weekHeader: "week",
    firstDay: 0,
    isRTL: !1,
    showMonthAfterYear: !0,
    //showButtonPanel: true,
    onClose: function() {
        var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val(), year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
        $(this).datepicker("option", "defaultDate", new Date(year, month, 1)), $(this).datepicker("setDate", new Date(year, month, 1)), 
        $("#ui-datepicker-div").removeClass("js-yy");
    },
    beforeShow: function() {
        var selectDate = $(".js-datepicker-yy_mm").val().split("-"), year = Number(selectDate[0]), month = Number(selectDate[1]) - 1;
        $(this).datepicker("option", "defaultDate", new Date(year, month, 1)), $("#ui-datepicker-div").addClass("js-yy");
    }
};
//# sourceMappingURL=maps/common.js.map