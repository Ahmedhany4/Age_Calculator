function age () {
  var d11 =document.getElementById('date');// 22
  var m11 =document.getElementById('month'); // 8
  var y11 =document.getElementById('year'); 
  var d1 =document.getElementById('date').value;// 22
  var m1 =document.getElementById('month').value; // 8
  var y1 =document.getElementById('year').value; // 2004

if (!d11.value || !m11.value|| !y11.value){

document.getElementById('alert').innerHTML='Please Fill Cells';
document.getElementById('alert').style.display='block';

  setTimeout(()=>{
  document.getElementById('alert').style.display='none';
} ,2000);
}
else{
  var date = new Date();
  var d2 = date.getDate();// Current Day 1
  var m2 = 1 + date.getMonth(); // Current Month 7
  var y2 = date.getFullYear(); // Current Year 2023
  var month = [31,28,31,30,31,30,31,31,30,31,30,31]; // All Months ===> Days

  if (d1>d2) { //22 > 1 
    //m2 7 
    d2 = d2 + month[m2-2]; // 1 + month[7-1] | 1+ month[6] | 1 + 31 += 32 | 31
    m2 = m2 - 1; //7 - 1 = 6 |
  }
  if (m1 >m2){ // 8 > 6  
    m2 = m2 + 12 ; // 6+12 =  18 
    y2 =y2 - 1 ; // 2022
  }
  var d = d2 - d1 ; // 32 - 22 = 10  // 31 -30 = 1
  console.log(d) ;
  var m = m2 - m1 ; // 18 - 8 = 10 
  var y = y2 -y1 ; // 2022-2004 = 18

  document.getElementById('age').innerHTML = 'Your Age is ' +"<span class = 'number'>" + y +"</span>"+ ' Year ' +"<span class = 'number'>"+ m +"</span>"+ ' Month ' +"<span class = 'number'>" + d +"</span>"+' Days';

}
}