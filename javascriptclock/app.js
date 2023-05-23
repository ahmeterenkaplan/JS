
let isim = prompt("İSMİNİZ NEDİR ?")
let myName=document.querySelector("#myName");
myName.innerHTML=isim;



function zaman(){
const timerAll =new Date()
let hour=timerAll.getHours()
let min=timerAll.getMinutes()
let sec = timerAll.getSeconds()
let day= timerAll.getDay()
let days=["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"]

document.getElementById('myClock').innerHTML=`${hour}:${min}:${sec}-${days[day-1]}`
}


setInterval(zaman,1000);
