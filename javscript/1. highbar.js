function show(){
  document.getElementById('sidebar').classList.toggle('active');  //sidebar라는 id를 가진 객체에 움직임을 주었습니다.
}
$(document).ready(function(){
$('#nav-icon1').click(function(){                  //nav-icon1라는 id를 가진 객체를 클릭 하는 명령어입니다.
$(this).toggleClass('open');                       //nav-icon1라는 id를 가진 객체를 클릭을 하면 sidebar가 열립니다.
});
});
