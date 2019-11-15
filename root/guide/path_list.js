var __GUIDE_LIST, __SITENAME,  __CONSTANT_HEAD, __CONSTANT_RULE, __CONSTANT_LSIT;

__SITENAME = { siteName : "투유 플랫폼"};
/**
 * 보여줄 칼럼에는 1, 보여주지 않을 칼럼에는 0
 */
__CONSTANT_HEAD = {
    no : 0,  		// NO
    dep1 : 1,		// depth-1
    dep2 : 1,		// depth-2
    dep3 : 1,		// depth-3
    dep4 : 1,		// depth-4
    dep5 : 0,		// depth-5
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
        title       : true,
        dep1 		: 'Guide',
        dep2 		: '',
        dep3 		: '',
        url 		: '',
        pubUpdate 	: '',
        etc 		: '',
    },
    {
        stateLine   : "del", 
        dep1 	  	: 'STYLE GUIDE',
        dep2 	  	: '',
        dep3 	  	: '',
        url  	  	: '/guide/guide_style.html',
        pubUpdate 	: '2019-0000',
        etc 	  	: '',
    },
    {
        stateLine   : "edit", 
        dep1 		: 'UI GUIDE',
        dep2 		: '',
        dep3 		: '',
        url 		: '/guide/guide_ui.html',
        pubUpdate 	: '2019-0000',
        etc 		: '',
    }, 
	{
        stateLine   : "", 
        dep1 		: 'LAYOUT GUIDE',
        dep2 		: '',
        dep3 		: '',
        url 		: '/html/sub/sub.html',
        pubUpdate 	: '2019-0000',
        etc 		: '',
    },
	{
        stateLine   : "", 
        dep1 		: 'etc',
        dep2 		: 'page_error',
        dep3 		: '',
        url 		: '/html/etc/page_error.html',
        pubUpdate 	: '2019-0000',
        etc 		: '',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: 'page_loading',
        dep3 		: '',
        url 		: '/html/etc/page_loading.html',
        pubUpdate 	: '2019-0000',
        etc 		: '',
    },
	{
        stateLine   : "", 
        title       : true,
        dep1 		: '모바일앱시작',
        dep2 		: '',
        dep3 		: '',
        url 		: '',
        pubUpdate 	: '',
        etc 		: '',
    },
	{
        stateLine   : "new", 
        dep1 		: '시작화면',
        dep2 		: '',
        dep3 		: '',
        url 		: '',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1201',
    },
 
	{
        stateLine   : "", 
        dep1 		: '회원가입',
        dep2 		: '이메일/카카오/네이버',
        dep3 		: '',
        url 		: '/html/start/join/JO-0001.html',
        pubUpdate 	: '2019-1113',
        etc 		: '2019-1113',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '전문가로 가입하기',
        url 		: '',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1113',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '이메일 입력',
        url 		: '/html/start/join/JO-0002.html',
        pubUpdate 	: '2019-1113',
        etc 		: '2019-1113',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '휴대폰 본인인증',
        url 		: '/html/start/join/JO-0003.html',
        pubUpdate 	: '2019-1113',
        etc 		: '2019-1113',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '비밀번호입력',
        url 		: '/html/start/join/JO-0004.html',
        pubUpdate 	: '2019-1113',
        etc 		: '2019-1113',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '프로필 사진 등록',
        url 		: '/html/start/join/JO-0005.html',
        pubUpdate 	: '2019-1113',
        etc 		: '2019-1113',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '약관동의',
        url 		: '/html/start/join/JO-0006.html',
        pubUpdate 	: '2019-1113',
        etc 		: '2019-1113',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '가입축하 이메일 발송',
        url 		: '/html/basic/main/mail_form.html',
        pubUpdate 	: '2019-1113',
        etc 		: '2019-1113',
    },
	{
        stateLine   : "", 
        dep1 		: '로그인',
        dep2 		: '이메일/카카오/네이버',
        dep3 		: '',
        url 		: '',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1113',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '이메일 로그인',
        url 		: '/html/start/login/LO_0001.html',
        pubUpdate 	: '2019-1113',
        etc 		: '2019-1113',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '아이디찾기',
        url 		: '/html/start/login/LO_0002.html',
        pubUpdate 	: '2019-1113',
        etc 		: '2019-1113',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '비밀번호찾기',
        url 		: '/html/start/login/LO_0003.html',
        pubUpdate 	: '2019-1113',
        etc 		: '2019-1113',
    },
	{
        stateLine   : "", 
        title       : true,
        dep1 		: '고객회원',
        dep2 		: '',
        dep3 		: '',
        url 		: '',
        pubUpdate 	: '',
        etc 		: '',
    },
	{
        stateLine   : "", 
        dep1 		: '홈',
        dep2 		: '',
        dep3 		: '',
        url 		: '/html/basic/main/home.html',
        pubUpdate 	: '2019-1113',
        etc 		: '2019-1113',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '홈서비스 주소입력',
        dep3 		: '',
        url 		: '/html/basic/main/MA_0001.html',
        pubUpdate 	: '2019-1113',
        etc 		: '2019-1113',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '홈서비스 주소입력 2',
        dep3 		: '',
        url 		: '/html/basic/main/MA_0002.html',
        pubUpdate 	: '2019-1113',
        etc 		: '2019-1113',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '상세 주소 입력',
        dep3 		: '',
        url 		: '/html/basic/main/MA_0003.html',
        pubUpdate 	: '2019-1113',
        etc 		: '2019-1113',
    },
	{
        stateLine   : "", 
        dep1 		: '서비스찾기',
        dep2 		: '상세검색/결과',
        dep3 		: '',
        url 		: '',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1117',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '목록',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1117',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '필터',
        url 		: '/html/basic/service/SV-0004.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1117',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '상세',
        dep3 		: '소개',
        url 		: '/html/basic/service/SV-0001.html',
        pubUpdate 	: '2019-1117',
        etc 		: '2019-1117',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '',
        dep4 		: '취소 및 환불정책',
        url 		: '/html/basic/service/SV-0002.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1117',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '',
        dep4 		: '신고하기',
        url 		: '/html/basic/service/SV-0003.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1117',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '',
        dep4 		: '공유하기',
        url 		: '/html/basic/service/SV-0001.html',
        pubUpdate 	: '2019-1117',
        etc 		: '2019-1117',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '서비스',
        url 		: '/html/basic/service/SV-0001.html',
        pubUpdate 	: '2019-1117',
        etc 		: '2019-1117',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '리뷰',
        url 		: '/html/basic/service/SV-0001.html',
        pubUpdate 	: '2019-1117',
        etc 		: '2019-1117',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '',
        dep4 		: '서비스 예약하기',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1117',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '',
        dep4 		: '예약일시 선택',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1117',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '',
        dep4 		: '장바구니',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1117',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '',
        dep4 		: '예약 결제하기',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1117',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '',
        dep4 		: '입금계좌정보확인팝업',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1117',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '',
        dep4 		: '예약완료',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1117',
    },
	{
        stateLine   : "", 
        dep1 		: '알림',
        dep2 		: '목록',
        dep3 		: '',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1117',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '카카오톡 안심 메시지 발송',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1117',
    },
	{
        stateLine   : "", 
        dep1 		: '채팅',
        dep2 		: '목록',
        dep3 		: '',
        url 		: '/html/basic/chatting/CH_0001.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1117',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '채팅창',
        dep3 		: '',
        url 		: '/html/basic/chatting/CH_0002.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1117',
    },
	{
        stateLine   : "", 
        dep1 		: '마이페이지',
        dep2 		: '서브메인',
        dep3 		: '',
        url 		: '/html/basic/mypage/MY-0001.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1117',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '신분인증',
        dep3 		: '',
        url 		: '/html/basic/mypage/MY-0002.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1117',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '안심메시지발송',
        dep3 		: '',
        url 		: '/html/basic/mypage/MY-0003.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1117',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '프로필 수정',
        dep3 		: '',
        url 		: '/html/basic/mypage/MY-0004.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1117',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '비밀번호 변경',
        url 		: '/html/basic/mypage/MY-0005.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1117',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '휴대폰번호 변경',
        url 		: '/html/basic/mypage/MY-0006.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1117',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '예약내역',
        dep3 		: '진행중',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1120',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '완료',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1120',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '미진행/취소',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1120',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '예약내역 상세',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1120',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '',
        dep4 		: '취소사유입력, 투유안전센터',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1120',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '',
        dep4 		: '환불계좌입력',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1120',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '',
        dep4 		: '리뷰',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1120',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '결제내역',
        dep3 		: '결제',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1120',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '취소',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1120',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '장바구니',
        dep3 		: '목록',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1120',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '찜한 전문가',
        dep3 		: '목록',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1120',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '알림 설정',
        dep3 		: '',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1120',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '안심 메시지 설정',
        dep3 		: '',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1120',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '자주묻는질문',
        dep3 		: '목록/상세',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1120',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '채팅고객센터',
        dep3 		: '',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1120',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '버전정보',
        dep3 		: '',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1120',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '약관 및 정책',
        dep3 		: '이용약관',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1120',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '개인정보보호정책',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1120',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '로그아웃',
        dep3 		: '',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1120',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '회원탈퇴',
        dep3 		: '',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1120',
    },
	{
        stateLine   : "", 
        title       : true,
        dep1 		: '전문가 회원',
        dep2 		: '',
        dep3 		: '',
        url 		: '',
        pubUpdate 	: '',
        etc 		: '',
    },
	{
        stateLine   : "", 
        dep1 		: '예약 내역',
        dep2 		: '서비스 등록하기',
        dep3 		: '',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1124',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '예약하기',
        dep3 		: '진행중',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1124',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '완료',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1124',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '미진행/취소',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1124',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '예약내역상세',
        dep4 		: '미진행 사유입력, 투유 안전센터',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1124',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '',
        dep4 		: '리뷰',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1124',
    },
	{
        stateLine   : "", 
        dep1 		: '서비스',
        dep2 		: '서비스등록현황',
        dep3 		: '',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1124',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '전문가 프로필 수정',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1124',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '서비스 상세정보',
        dep4 		: '동록/수정',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1124',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '',
        dep4 		: '전문성 어필하기',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1124',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '미리보기',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1124',
    },
	{
        stateLine   : "", 
        dep1 		: '알림',
        dep2 		: '목록',
        dep3 		: '',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1124',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '카카오톡 안심 메시지 발송',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1124',
    },
	{
        stateLine   : "", 
        dep1 		: '채팅',
        dep2 		: '목록',
        dep3 		: '',
        url 		: '/html/.html', 
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1124',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '채팅창',
        dep3 		: '',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1124',
    },
	{
        stateLine   : "", 
        dep1 		: '마이페이지',
        dep2 		: '예약가능/불가능',
        dep3 		: '',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1124',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '신분인증',
        dep3 		: '',
        dep4 		: '',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1124',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '전문가 프로필 수정',
        dep3 		: '휴대폰번호변경, 비밀번호변경',
        dep4 		: '',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1124',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '전문가 위치 주소 입력',
        dep4 		: '',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1124',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '상세 주소 입력',
        dep4 		: '',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1124',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '판매내역',
        dep3 		: '결제',
        dep4 		: '',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1127',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '취소',
        dep4 		: '',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1127',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '상세',
        dep4 		: '',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1127',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '정산내역',
        dep3 		: '',
        dep4 		: '',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1127',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '정산정보관리',
        dep3 		: '',
        dep4 		: '',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1127',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '알림설정',
        dep3 		: '',
        dep4 		: '',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1127',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '자주묻는질문',
        dep3 		: '',
        dep4 		: '',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1127',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '채팅고객센터',
        dep3 		: '',
        dep4 		: '',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1127',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '버전정보',
        dep3 		: '',
        dep4 		: '',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1127',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '약관 및 정책',
        dep3 		: '이용약관',
        dep4 		: '',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1127',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '개인정보 보호정책',
        dep4 		: '',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1127',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '로그아웃',
        dep3 		: '',
        dep4 		: '',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1127',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '회원탈퇴',
        dep3 		: '',
        dep4 		: '',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1127',
    },
	{
        stateLine   : "", 
        title       : true,
        dep1 		: '랜딩 페이지',
        dep2 		: '',
        dep3 		: '',
        url 		: '',
        pubUpdate 	: '',
        etc 		: '',
    },
	{
        stateLine   : "", 
        dep1 		: 'PC 웹 메인 랜딩',
        dep2 		: '',
        dep3 		: '',
        dep4 		: '',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1201',
    },
	{
        stateLine   : "", 
        dep1 		: '모바일 웹 메인 랜딩',
        dep2 		: '',
        dep3 		: '',
        dep4 		: '',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1201',
    },
	{
        stateLine   : "", 
        dep1 		: '앱 아이콘 및 스플래시 이미지',
        dep2 		: '',
        dep3 		: '',
        dep4 		: '',
        url 		: '/html/.html',
        pubUpdate 	: '2019-0000',
        etc 		: '2019-1204',
    },
 
];

__CONSTANT_RULE = { getIndex: function () { var _idx = ++window['INDEX'] || (window['INDEX'] = 0); return _idx + 1; }, li_option: function ($item) { var _return = ""; /*topLine*/ if ($item.title) { _return += ' t-title'; }; if ($item.dep1) { _return += ' t-divide'; }; /*compareUpdate*/ if ($item.pubUp && $item.devUp) { if ($item.pubUp > $item.devUp) { _return += ' is-different'; } }; /*isDone*/ if ($item.stateHTML && $item.stateJS) { if ($item.stateHTML && $item.stateJS) { _return += ' is-done'; } }; /* 상태라인 */ if ($item.stateLine) { if ($item.stateLine == "edit") { _return += ' edit'; } if ($item.stateLine == "del") { _return += ' del'; } }; return _return; }, path: function () { return '..' + this.url; }, getfileName: function ($item) { var aURL = $item.url.split('/'); return aURL[aURL.length - 1]; }, };

var _data = {_temp_dep1:""}; Vue.component('search-component', { props: ['listItem', 'dep1SearchIndex'], data: function(){ return _data }, template: '<cite style="position:absolute; font-size:0; line-height:0">{{ listItem.dep1? _temp_dep1 = listItem.dep1 : _temp_dep1 }}</cite>' });
__GUIDE_LIST = new Vue({el: '#guide_list',data: {config : __SITENAME,t_head : __CONSTANT_HEAD,t_rule : __CONSTANT_RULE,t_body : __CONSTANT_LIST,}, methods: __CONSTANT_RULE, beforeCreate: function(){ $("#guide_list").show() }, });


$(document).ready(function () { /* 배열 변수넣기 */var _updateArr = [];$("._GUIDE__list__col--update-pub").each(function (index) {_updateArr.push($("._GUIDE__list__col--update-pub").eq(index).text().replace("-", ""));}); /* 배열 최대값 */var _max = _updateArr.reduce(function (a, b) {return Math.max(a, b);}); /* 최대값 클래스 넣기 */for (var i in _updateArr) {if (_updateArr[i] == _max) {$("._GUIDE__list__col--update-pub").eq(i).addClass("new_update");}}; /* 검색 */var searchFn = function () {var n = $("#tpl-body").html(),o = $("#list-body");$("#list-sch_txt").on("keydown keyup", function () {var t = $(this).val();o.find("li").hide(), o.find(":contains(" + t + ")").closest("li").show();});};$("#list-head").length && searchFn();});

