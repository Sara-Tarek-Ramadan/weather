let firstCard=document.getElementById('firstCard')
let secondCard=document.getElementById('secondCard')
let thirdCard=document.getElementById('thirdCard')
let btnSearch=document.getElementById('btnsearch');
let inpSearch=document.getElementById('inpsearch');
let http=new XMLHttpRequest();
let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

let Arr=[];

async function GetData(q){
    let data=await fetch
    (`http://api.weatherapi.com/v1/forecast.json?key=70e714b087854d8eaa6111649231802&q=giza&days=3&aqi=no&alerts=no`)

   if (q!="") {
  
     data=await fetch
    (`http://api.weatherapi.com/v1/forecast.json?key=70e714b087854d8eaa6111649231802&q=${q}&days=3&aqi=no&alerts=no`)
   }

  let result=await data.json()
     return result;
    
} 
 
// first day 
let firstDay= async function(){
    let firstObj=await GetData(inpSearch.value)
    let location=firstObj.location.name;
    let tempc=firstObj.current.temp_c;
    let icon=firstObj.current.condition.icon
    let text=firstObj.forecast.forecastday[0].day.condition.text;
    let date=firstObj.forecast.forecastday[0].date;
    let month=["january","february","March","april","May","june","july","august","september","october","november","december"]
    date=new Date() 
function display2() {
    let box=``
  for(let i=0;i<1;i++)  {
box+=`
<div class="card-header d-flex justify-content-between">
<h5 class="w-50">${ days[date.getDay()]}</h5>

<h5>${date.getDate()}${month[date.getMonth()]}</h5>

</div>
<div class="card-body">
  <h5 class="">${location}</h5>
 <div class="d-flex justify-content-around">
 <h1 class="fs">${tempc}&#8451</h1>
<img src="${icon}" alt="" srcset="">
 </div>
 <p class="text-info">${text}</p>
</div> 
<div>
<ul class="fa-ul d-flex justify-content-between w-75 ">
<li><span class="fa-li"><i class="fa-solid fa-umbrella"></i></span>20%</li>
<li><span class="fa-li"><i class="fa-solid fa-poo-storm"></i></span>18km/h</li>
<li><span class="fa-li"><i class="fa-solid fa-earth-africa"></i>
</span>East</li>
</ul>



</div>

`  }
document.getElementById('firstCard').innerHTML=box
}
display2()
   }
   firstDay()
//    second day 

   let secondDay=async function(){
    let firstObj=await GetData(inpSearch.value)
    let maxtempc=firstObj.forecast.forecastday[1].day.maxtemp_c;
    let mintempc=firstObj.forecast.forecastday[1].day.mintemp_c;
    let text=firstObj.forecast.forecastday[1].day.condition.text;
    let icon=firstObj.forecast.forecastday[1].day.condition.icon;
    let date=firstObj.forecast.forecastday[1].date;
    date=new Date()
function display() {
    let box=``
  for(let i=1;i<2;i++)  {
box+=`
<div class="card-header text-center">${days[date.getDay()+1]}</div>
<div class="card-body text-center ">
<img src="${icon}" alt="" srcset="">
<h5 >${maxtempc}&#8451</h5>
<p >${mintempc} &#8451</p>
<p class="text-info">${text}</p>

</div>
`  }
document.getElementById('secondCard').innerHTML=box
}
display()
   }
   secondDay()

// third day 

let thirdDay=async function(){
    let firstObj=await GetData(inpSearch.value)
    let maxtempc=firstObj.forecast.forecastday[2].day.maxtemp_c;
    let mintempc=firstObj.forecast.forecastday[2].day.mintemp_c;
    let text=firstObj.forecast.forecastday[2].day.condition.text;
    let icon=firstObj.forecast.forecastday[2].day.condition.icon;
    let date=firstObj.forecast.forecastday[2].date;
    date=new Date()
function display3() {
    let box=``
  for(let i=1;i<2;i++)  {
box+=`
<div class="card-header text-center">${days[date.getDay()+2]}</div>
<div class="card-body text-center ">
<img src="${icon}" alt="" srcset="">
<h5 >${maxtempc} &#8451</h5>
<p >${mintempc} &#8451</p>
<p class="text-info">${text}</p>

</div>
`  }
document.getElementById('thirdCard').innerHTML=box
}
display3()
   }
   thirdDay()

   /*********************** */
   inpSearch.addEventListener("input",function(){
    firstDay()
    secondDay()
    thirdDay()
})

