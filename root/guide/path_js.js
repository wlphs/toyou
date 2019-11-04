$(document).ready(function(){
    var url ="";
    $('tr.pop').on('mouseover', function(){
        url = $(this).find('td.link').html();
        if (url && url.length > 2) {
            $(this).find('td').css('background','rgba(0,111,190,0.1)') ;
        }
    });
    $('tr.pop').on('mouseout', function(){
        url = $(this).find('td.link').html();
        if (url && url.length > 2) {
            $(this).find('td').css('background-color','#ffffff');
        }
    })
    $('tr.del').on('mouseover', function(){
        url = $(this).find('td.link').html();
        if (url && url.length > 2) {
            $(this).find('td').css('background-color','#e6e6e6') ;
        }
    });
    $('tr.del').on('mouseout', function(){
        url = $(this).find('td.link').html();
        if (url && url.length > 2) {
            $(this).find('td').css('background-color','#e6e6e6');
        }
    })
    $('tr.edite').on('mouseover', function(){
        url = $(this).find('td.link').html();
        if (url && url.length > 2) {
            $(this).find('td').css('background-color','rgba(248,208,208,0.2)') ;
        }
    });
    $('tr.edite').on('mouseout', function(){
        url = $(this).find('td.link').html();
        if (url && url.length > 2) {
            $(this).find('td').css('background-color','rgba(248,208,208,0.2)');
        }
    })

    /* 링크 */
    $('tr.pop td.link').each(function(i) {
        url = $(this).parent('tr').find('td.link').html();
        console.log(url.substr(-5));
        if (url.substr(-5) == ".html") {
            tagA = '<a href="'+url+'">'+url+'</a>'; 
            if(url == ""){ url ="#"};					
            $(this).html(tagA);
        }
    });
    $('tr').each(function(e) {
        url = $(this).find('td.link').html();
        if (!url) return false;
        //if (url.substr(-5) != ".html") return false;
        if (url && url.length > 2) {
            $(this).addClass('complete');
        }
    });
    $('td.link').on('click', function() {
        console.log($(this).html().substr(-5))
    })
    var $tac = $(".tac");
    $tac.each(function(i) {
        if ($(this).text() == "2015-11-30")
        {
            $(this).css("color","red").text($(this).text() + "수정");
        }
    });
    var $yet = $(".yet");
    $yet.each(function(i) {
        $(this).find("th").eq(2).css("background-color","yellow");
    });

})