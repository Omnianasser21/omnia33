var input1 = document.querySelector("#input1");
var button2 = document.querySelector("#button2");



var dataList =[];
async function getCountry(city) {
  dataList =[];
  var res = await fetch( `http://api.weatherapi.com/v1/forecast.json?key=068ed2b5c07d44849aa120354240712&q=${city}&days=7`);
  data = await res.json();
  dataList.push(data)
  console.log(dataList);
  display()


}

let currentDate= new Date();
let days=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
let dayName=days[currentDate.getDay()];


let dayofmonth=currentDate.getDate();

let Month=['January','February','March','April','May','June','July','August','September','October','November','December']
let MonthName=Month[currentDate.getMonth()];

let nextdate=new Date();
nextdate.setDate(currentDate.getDate() +1);
let nextDayNme= days[nextdate.getDay()];

let day3= new Date();
day3.setDate(currentDate.getDate()+2)
let lastday=days[day3.getDay()]







input1.addEventListener("input", function () {
  search()
});

function search() {
  var word = input1.value;
  if (word) {
    getCountry(word);
  } 
}

getCountry('cairo')

function display() {
  var cart = "";
  for (var i = 0; i < dataList.length ; i++) {
    cart += ` <div class="col-md-4">
            <div class="card  text-white " style="max-width: 25rem;">
            <div class="card-header d-flex justify-content-between">
            <p>${dayName}</p>
            <p> ${dayofmonth}${MonthName}</p>   
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">${dataList[i].location.name}</h5>
                      <p class="card-t  fw-bold">${
                        dataList[i].current.temp_c}</p>
                     <img src="https://${
                     dataList[i].current.condition.icon
                     }">
                      <br>
                      <span class="text-primary">${
                        dataList[i].current.condition.text
                        }</span>
                      <div class="d-flex gap-2 mt-2">
                        <img src="img/icon-umberella.png" alt=""><span>20%</span>
                        <img src="img/icon-wind.png" alt=""><span>18km/h</span>
                        <img src="img/icon-compass.png" alt=""><span>East</span>

                      </div>
                    </div>

            </div>

           </div>
                    <div class="col-md-4">
     <div class="card2  card  text-white  " style="max-width: 25rem;">
        <div class="card-header text-center">
          <p>${nextDayNme}</p>
    
       </div>

         <div class="card-body text-center">

        <img src="https://${
                     dataList[i].current.condition.icon }">
         <h5>${
                        dataList[i].current.temp_c}</h5>
       <p class="text-primary">${
        dataList[i].current.condition.text
        }</p>
          
          
        </div>

 </div>

 </div>
 <div class="col-md-4">
 <div class="card  text-white " style="max-width: 25rem;">
     <div class="card-header text-center">
         <p>${lastday}</p>

     </div>
     <div class="card-body2 text-center">

       <img src="https://${
                     dataList[i].current.condition.icon }">
      <h5>${
                        dataList[i].current.temp_c}</h5>
           <p class="text-primary">${
        dataList[i].current.condition.text}</p>
      
      
     </div>

 </div>

 </div>
           
      
           
       `;
  }
  document.querySelector("#row").innerHTML = cart;
}



