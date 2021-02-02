var obTimeOut;
var ObjectArray = new Array ();  // clearTimeout() 함수를 이용하여 Timeout 을 취소하기위해 사용됨
/*배열의 값을 주어서 이미지가 2번 돌아가도록 하고 그 이후는 사용자가 직접 눌러 돌아가도록 하였습니다.*/
ObjectArray[1] = "shal-e-1.jpg";
ObjectArray[2] = "Isolation.jpg";
ObjectArray[3] = "depression.jpg";
ObjectArray[4] = "Silence.jpg";
ObjectArray[5] = "Weakness.jpg";
ObjectArray[6] = "shal-e-1.jpg";
ObjectArray[7] = "Isolation.jpg";
ObjectArray[8] = "depression.jpg";
ObjectArray[9] = "Silence.jpg";
ObjectArray[10] = "Weakness.jpg";
ObjectArray[11] = "shal-e-1.jpg";
var nObjectCnt = 0;	
function ShowDefaultRotate() //스스로 자신을 호출하는 재귀함수(recursive Function)
{
	nObjectCnt++;
	if( nObjectCnt < ObjectArray.length ) //배열의 갯수 이내일때만 실행
	{
		document.getElementById("image-id").src = ObjectArray[nObjectCnt];		 
		obTimeOut = setTimeout("ShowDefaultRotate()",2000); //2초후에 다음 이미지를 출력합니다.
	}
	else
	{
		clearTimeout(obTimeOut); // 배열의 갯수만큼 반복하여 변환시킨 후에는 Timeout 을 중지시킵니다.
	}		
}
function startAnimation()
{
      obTimeOut = window.setTimeout(ShowDefaultRotate,100);// 윈도우 로드 후 0.1초 후에 반복함수를 호출합니다.

}
 window.onload = startAnimation;   /*윈도우창이 실행되자마자 시작되게 만들었습니다.*/

 function btn(){  //버튼을 누르면 출력이 되도록하였습니다.
    alert('게임을 다운받으십쇼 다운받으실려면 회원가입을 해야합니다.');
}

