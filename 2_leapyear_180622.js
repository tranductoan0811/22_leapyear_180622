function leapyear() {

  let year = parseInt(prompt("Nhập năm: "));
  var display = "";
  
  if ((year % 4 == 0 && year % 100 != 0) || (year % 100 ==0 && year % 400 ==0)) {

    display = alert(year + " is leap year");
    
  } else if (year % 100 ==0 && year % 400 !=0) {

    display = alert(year + " is NOT leap year");

  }

  document.getElementById("result").innerHTML = display;


}