function btn(){
    var year = (new Date()).getFullYear();  /*연도을 출력하는 javascript입니다*/
    console.log(year);
    var month = (new Date()).getMonth();  /*월을 출력하는 javascript입니다*/
    console.log(month);
    var day = (new Date()).getDate();   /*일수를 출력하는 javascript입니다*/
    console.log(day);
    var hours = (new Date()).getHours();  /*시간을 출력하는 javascript입니다*/
    console.log(hours); 
    var minutes = (new Date()).getMinutes(); /*분을 출력하는 javascript입니다*/
    console.log(minutes);
    alert(year+'년'+(month+1)+'월'+day+'일'+hours+'시'+minutes+'분에 문의가 보내졌습니다. \n 답변까지 소요시간은 1~2일입니다.');
    /*(month+1)의 이유는 월은 0~11월까지로 입력되기 때문입니다. 즉 맞는달을 표기하려면 +1해줘야합니다.*/
}

    
