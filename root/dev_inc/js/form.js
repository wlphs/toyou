$(document).ready(function () {  
    
    function inputdel_fn($this) {
        ///console.log('$this.val()', $this.val());
        var _noneDisable = !$this.prop("disabled");
        if( $this.val() != "" && _noneDisable){
            $this.siblings("button").css({display:"block"});
            $this.siblings("button").one("click", function(){
                $this.val("");
                $this.siblings("button").css({display:"none"});
            });
        }else{
            $this.siblings("button").css({display:"none"});
        }
    }
    $("body").on("keyup focusout", ".input_del input", function(){
        inputdel_fn( $(this) );
    });
    $("body .input_del input").each(function($i){
        inputdel_fn( $(this) );
    });
    


    /* ======= 달력 ======= */
    $(".js-datepicker").datepicker(datepicker_yy_mm_dd);

    /* ======= 달력 -년-월 ======= */
    $(".js-datepicker-yy_mm").datepicker(datepicker_yy_mm);

    /* ======= 달력  -년 ======= */
    $(".js-datepicker-yy").datepicker(datepicker_yy);



            
    /* 일반 툴팁 */
    $(".js-tooltip").tooltip({ 
        position: { 
            my: "center bottom-15",
            at: "center top",
            using: function( position, feedback ) {
                $( this ).css( position );
                $( "<div>" ).addClass( "arrow" ).addClass( feedback.vertical ).addClass( feedback.horizontal ).appendTo( this );
            }
        }
    });//.tooltip( "open" );

    
    /* 길설명 툴팁 */
    $(".js-tooltip_sendstate").tooltip({ 
        position: { 
            my: "center bottom-10",
            at: "center top",
            using: function( position, feedback ) {
                $( this ).css( position );
                var _dotL = feedback.target.left - position.left + 6; 
                $( "<div>" ).addClass( "arrow" ).addClass( feedback.vertical ).addClass( feedback.horizontal ).appendTo( this ).css({ left: _dotL });
            }
        },
        tooltipClass:"tooltip_big",
        items: "img, [data-geo], [title]",
        content: function() {
            var element = $( this );
            var selcet = $( this ).attr("data-geo");
            if ( element.is( "[data-geo]" ) ) {
                $(".ui-tooltip").css({"max-width":"500px;" });
                return $(selcet).html();
            }
            if ( element.is( "[title]" ) ) {
                return element.attr( "title" );
            }
            if ( element.is( "img" ) ) {
                return element.attr( "alt" );
            }
        }   
    });//.tooltip( "open" );       


    $('.js-all_check')
});

jQuery.fn.allCheckbox = function( $check_item){
    var _all = $(this);
    var len = $($check_item).length;
    _all.on('change', function() {
        $($check_item).prop('checked', $(this).prop('checked'))
    });
    $($check_item).on('change', function () {
        _all.prop('checked', $($check_item+':checked').length == len);
    })
}


jQuery.fn.oneCheckbox = function( $check_item_option){
    var _one = $(this);
    _one.on('change', function() {
        $($check_item_option).prop('checked', $(this).prop('checked'))
    });
    $($check_item_option).on('change', function () {
        _one.prop('checked', $($check_item_option+':checked').length);
    })
}


jQuery.fn.allCheckbox_option = function( $check_item, $options_boss,$check_item_option){
    var _all = $(this);
    var len = $($check_item).length;
    _all.on('change', function() {
        $($check_item).prop('checked', $(this).prop('checked'))
        $($check_item_option).prop('checked', $(this).prop('checked'))
    });
    $($check_item).on('change', function () {
        _all.prop('checked', $($check_item+':checked').length == len);
    })

    var _one = $($options_boss);
    _one.on('change', function() {
        $($check_item_option).prop('checked', $(this).prop('checked'))
    });
    $($check_item_option).on('change', function () {
        console.log($($check_item_option+':checked').length)
        _one.prop('checked', $($check_item_option+':checked').length);
        _all.prop('checked', $($check_item+':checked').length == len);
    })
}

jQuery.fn.oneCheckbox_all = function( $check_item_option){
    var _one = $(this);
    _one.on('change', function() {
        $($check_item_option).prop('checked', $(this).prop('checked'))
    });
    $($check_item_option).on('change', function () {
        _one.prop('checked', $($check_item_option+':checked').length);
    })
}


var datepicker_yy_mm_dd = {
    dateFormat: "yy-mm-dd", 
    showMonthAfterYear:true,
    //yearSuffix: "년",
    monthNames: ['1','2','3','4','5','6','7','8','9','10','11','12'],
    monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
    dayNamesMin: ["S","M","T","W","T","F","S"], 
    dayNames: ["S","M","T","W","T","F","S"]
}


var datepicker_yy_mm = {
    dateFormat: "yy-mm", 
    closeText : "close",
    changeMonth: true,
    changeYear: true,
    monthNames: ['1','2','3','4','5','6','7','8','9','10','11','12'],
    monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
    dayNamesMin: ["S","M","T","W","T","F","S"], 
    dayNames: ["S","M","T","W","T","F","S"],
    weekHeader : "week",
    firstDay : 0,
    isRTL : false,
    showMonthAfterYear : true,
    //showButtonPanel: true,
    onClose : function(dateText, inst) {
        var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
        var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
        $(this).datepicker( "option", "defaultDate", new Date(year, month, 1) );
        $(this).datepicker('setDate', new Date(year, month, 1));
        $('#ui-datepicker-div').removeClass("js-yy_mm");
    },
    beforeShow: function(input, inst) {
        var selectDate = $(".js-datepicker-yy_mm").val().split("-");
        var year = Number(selectDate[0]);
        var month = Number(selectDate[1]) - 1;
        $(this).datepicker( "option", "defaultDate", new Date(year, month, 1) );
        $('#ui-datepicker-div').addClass("js-yy_mm");
    }
}


var datepicker_yy = {
    dateFormat: "yy", 
    closeText : "close",
    changeMonth: true,
    changeYear: true,
    monthNames: ['1','2','3','4','5','6','7','8','9','10','11','12'],
    monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
    dayNamesMin: ["S","M","T","W","T","F","S"], 
    dayNames: ["S","M","T","W","T","F","S"],
    weekHeader : "week",
    firstDay : 0,
    isRTL : false,
    showMonthAfterYear : true,
    //showButtonPanel: true,
    onClose : function(dateText, inst) {
        var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
        var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
        $(this).datepicker( "option", "defaultDate", new Date(year, month, 1) );
        $(this).datepicker('setDate', new Date(year, month, 1));
        $('#ui-datepicker-div').removeClass("js-yy");
    },
    beforeShow: function(input, inst) {
        var selectDate = $(".js-datepicker-yy_mm").val().split("-");
        var year = Number(selectDate[0]);
        var month = Number(selectDate[1]) - 1;
        $(this).datepicker( "option", "defaultDate", new Date(year, month, 1) );
        $('#ui-datepicker-div').addClass("js-yy");
    }
}



