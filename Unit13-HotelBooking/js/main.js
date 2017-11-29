// COLLAPSIBLE MENU

var acc = document.getElementsByClassName("accordion");
var m;

for (m = 0; m < acc.length; m++) {
    acc[m].onclick = function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}


// JavaScript Document

var hotelInfo;
var details;
var xhr = new XMLHttpRequest();
xhr.open('GET', "data.json", true);
xhr.responseType = 'text';
xhr.send();


xhr.onload = function() {
    if(xhr.status === 200) {
        hotelInfo = JSON.parse(xhr.responseText);
      //  console.log(hotelInfo);
        display(0, 0);
    } // end if
} // end function

function display(x, roomIndex){
  //  console.log(x);
  //  document.getElementById('name').innerHTML = hotelInfo[x].name;
    document.getElementById('name').innerHTML = hotelInfo.hotel[x].room[roomIndex].name;
    document.getElementById('desc').innerHTML = hotelInfo.hotel[x].room[roomIndex].description;
    document.getElementById('photo').src = hotelInfo.hotel[x].room[roomIndex].photo;

    document.getElementById('weekday').innerHTML = hotelInfo.hotel[x].room[roomIndex].cost.weekday;
    document.getElementById('weekend').innerHTML = hotelInfo.hotel[x].room[roomIndex].cost.weekend;

    details = "";
    for(i=0; i<hotelInfo.hotel[x].room[roomIndex].details.length; i++){
    //  console.log(hotelInfo.hotel[x].room[roomIndex].details[i]);
      details += "<p>"+hotelInfo.hotel[x].room[roomIndex].details[i]+"</p>";
    } // End of Loop
    document.getElementById('details').innerHTML = details;

} // End of Function
