var __GUIDE_LIST, __SITENAME,  __CONSTANT_HEAD, __CONSTANT_RULE, __CONSTANT_LSIT;

__SITENAME = { siteName : "[SKB] POC"};
/**
 * 보여줄 칼럼에는 1, 보여주지 않을 칼럼에는 0
 */
__CONSTANT_HEAD = {
    no : 1,  		// NO
    dep1 : 1,		// depth-1
    dep2 : 1,		// depth-2
    dep3 : 1,		// depth-3
    dep4 : 1,		// depth-4
    dep5 : 1,		// depth-5
    url : 1,		// File path
    role : 0,		// 담당자
    stateHTML : 0,	// HTML
    stateJS : 0,	// javascript
    state : 0,		// 완료상태
    pubUpdate  : 1,	// 퍼블수정 날짜
    devUpdate  : 0,	// 개발수정 날짜
    etc : 1			// 기타 메모
};


/***
 * 아래 리스트 추가
 * 지원 key 값
 *  각 뎁스에 해당하는 key값으로 입력
 */
__CONSTANT_LIST = [
/**
    * example
    {
        stateLine : "",              // 상태 클래스 (이상무 : "" , 수정 : "edit", 삭제 : "del")
        dep1 : '1뎁스 메뉴 이름',     // option ( 1뎁스 입력시 구분선 )
        dep2 : '2뎁스 메뉴 이름',     // option
        dep3 : '3뎁스 메뉴 이름',     // option
        dep4 : '4뎁스 메뉴 이름',     // option
        dep5 : '5뎁스 메뉴 이름',     // option
        url :  '/html/main.html'	//파일URL
        role : '홍길동',             // 담당자
        stateHTML : 1,              // 1을 넣으면 상태에 '완료' 라는 문구 출력, //option
        stateJS : 1,                // 1을 넣으면 상태에 '완료' 라는 문구 출력, //option
        state   : 1,                // 1을 넣으면 상태에 '완료' 라는 문구 출력, //option
        pubUpdate : 2019-0000,		// 마지막날 배경색표기
        devUpdate : 2019-0000,		// 
        etc : '디자인변경예정',       // 비고 란에 출력
    }
*/


// Guide
    {
        stateLine   : "", 
        dep1 	  	: 'GUIDE',
        dep2 	  	: 'STYLE',
        dep3 	  	: 'STYLE GUIDE',
        dep4 	  	: '',
        url  	  	: '/guide/guide_style.html',
        pubUpdate 	: '2019-0924',
        etc 	  	: '',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: 'UI',
        dep3 		: 'UI GUIDE',
        dep4 	  	: '',
        url 		: '/guide/guide_ui.html',
        pubUpdate 	: '2019-0924',
        etc 		: '',
    }, 
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: 'LAYOUT',
        dep3 		: 'LAYOUT GUIDE',
        dep4 	  	: '',
        url 		: '/view/sub/sub.html',
        pubUpdate 	: '2019-0924 2019-0925',
        etc 		: '',
    },

	{
        stateLine   : "", 
        dep1 		: '공통',
        dep2 		: '메인',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '',
        pubUpdate 	: '2019-0000',
        etc 		: '',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '로그인',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '',
        pubUpdate 	: '2019-0000',
        etc 		: '',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '간편로그인 ',
        dep4 	  	: '',
        url 		: '',
        pubUpdate 	: '2019-0000',
        etc 		: '',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 	  	: '',
        dep4 		: '휴대폰인증동의안내 ',
        url 		: '',
        pubUpdate 	: '2019-0000',
        etc 		: '',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '토큰로그인',
        dep3 		: ' ',
        url 		: '',
        pubUpdate 	: '2019-0000',
        etc 		: '',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '검색',
        dep3 		: '',
        url 		: '',
        pubUpdate 	: '2019-0000',
        etc 		: '',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '설정',
        dep3 		: '알림설정',
        url 		: '',
        pubUpdate 	: '2019-0000',
        etc 		: '',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '서비스 약관 및 개인정보 보호 정책',
        dep4 		: '부가세 포함 안내 ',
        url 		: '',
        pubUpdate 	: '',
        etc 		: '',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '',
        dep4 		: '요금 감면 안내',
        url 		: '',
        pubUpdate 	: '',
        etc 		: '',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '',
        dep4 		: '이용약관',
        url 		: '',
        pubUpdate 	: '',
        etc 		: '',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '',
        dep4 		: '개인정보 처리방침',
        url 		: '',
        pubUpdate 	: '',
        etc 		: '',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '',
        dep4 		: '이용자 비밀번호 관리',
        url 		: '',
        pubUpdate 	: '',
        etc 		: '',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '',
        dep4 		: '청소년보호정책',
        url 		: '',
        pubUpdate 	: '',
        etc 		: '',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '',
        dep4 		: '개인정보 이용내역 조회',
        url 		: '',
        pubUpdate 	: '',
        etc 		: '',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '',
        dep4 		: '책임의 한계와 법적 고지',
        url 		: '',
        pubUpdate 	: '',
        etc 		: '',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '',
        dep4 		: '명의도용 알림 서비스',
        url 		: '',
        pubUpdate 	: '',
        etc 		: '',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '',
        dep4 		: '이용자 피해예방 센터',
        url 		: '',
        pubUpdate 	: '',
        etc 		: '',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '',
        dep4 		: '스팸방지',
        url 		: '',
        pubUpdate 	: '',
        etc 		: '',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '',
        dep4 		: '광고안내',
        url 		: '',
        pubUpdate 	: '',
        etc 		: '',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '',
        dep4 		: '모바일 접근성 안내',
        url 		: '',
        pubUpdate 	: '',
        etc 		: '',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '',
        dep4 		: '구매/상생협력',
        url 		: '',
        pubUpdate 	: '',
        etc 		: '',
    },
    




	{
        stateLine   : "", 
        dep1 		: '콘텐츠방송',
        dep2 		: '',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '',
        pubUpdate 	: '',
        etc 		: '',
    },
	{
        stateLine   : "", 
        dep1 		: '상품가입',
        dep2 		: '',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '',
        pubUpdate 	: '',
        etc 		: '',
    },
	{
        stateLine   : "", 
        dep1 		: '고객센터',
        dep2 		: '',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '',
        pubUpdate 	: '',
        etc 		: '',
    },
	{
        stateLine   : "", 
        dep1 		: '마이페이지',
        dep2 		: '',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '',
        pubUpdate 	: '',
        etc 		: '',
    },
















];

__CONSTANT_RULE = { getIndex: function () { var _idx = ++window['INDEX'] || (window['INDEX'] = 0); return _idx + 1; }, li_option: function ($item) { var _return = ""; /*topLine*/ if ($item.dep1) { _return += ' t-divide'; }; /*compareUpdate*/ if ($item.pubUp && $item.devUp) { if ($item.pubUp > $item.devUp) { _return += ' is-different'; } }; /*isDone*/ if ($item.stateHTML && $item.stateJS) { if ($item.stateHTML && $item.stateJS) { _return += ' is-done'; } }; /* 상태라인 */ if ($item.stateLine) { if ($item.stateLine == "edit") { _return += ' edit'; } if ($item.stateLine == "del") { _return += ' del'; } }; return _return; }, path: function () { return '..' + this.url; }, getfileName: function ($item) { var aURL = $item.url.split('/'); return aURL[aURL.length - 1]; }, };

var _data = { _temp_dep1: "" }; Vue.component('search-component', { props: ['listItem', 'dep1SearchIndex'], data: function () { return _data }, template: '<cite style="position:absolute; font-size:0; line-height:0">{{ listItem.dep1? _temp_dep1 = listItem.dep1 : _temp_dep1 }}</cite>' }); __GUIDE_LIST = new Vue({ el: '#guide_list', data: { config: __SITENAME, t_head: __CONSTANT_HEAD, t_rule: __CONSTANT_RULE, t_body: __CONSTANT_LIST, }, methods: __CONSTANT_RULE, beforeCreate: function () { $("#guide_list").show() }, });

$(document).ready(function () { /* 배열 변수넣기 */ var _updateArr = []; $("._GUIDE__list__col--update-pub").each(function (index) { _updateArr.push($("._GUIDE__list__col--update-pub").eq(index).text().replace("-", "")); }); /* 배열 최대값 */ var _max = _updateArr.reduce(function (a, b) { return Math.max(a, b); }); /* 최대값 클래스 넣기 */ for (var i in _updateArr) { if (_updateArr[i] == _max) { $("._GUIDE__list__col--update-pub").eq(i).closest("._GUIDE__list__item").addClass("new_update"); } }; /* 검색 */ var searchFn = function () { var n = $("#tpl-body").html(), o = $("#list-body"); $("#list-sch_txt").on("keydown keyup", function () { var t = $(this).val(); o.find("li").hide(), o.find(":contains(" + t + ")").closest("li").show(); }); }; $("#list-head").length && searchFn(); });