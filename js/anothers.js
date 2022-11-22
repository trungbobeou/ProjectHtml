
$(document).ready(function () {

    /*Time Function*/
    startTime();
    document.getElementById("calendar").innerHTML = formattedToday;


    /*Chance Function*/
    $("#addLine").on("click", function () {
        var lineAdd = $("#valueAddLine").val();
        var rowLine = "<li id='" + lineAdd + "' class='list-group-item'><input class='form-check-input me-2' type='checkbox'><input class='form-check-input me-2' type='checkbox'>" + lineAdd + "</li>"
        $("#listGroupLine").append(rowLine);
    })

    $("#dellLine").on("click", function () {
        var lineAdd = $("#valueAddLine").val();
        $("#" + lineAdd).remove();
    })
    $("#closeChance").on("click", function () {
        $("#listGroupLine").remove();
        $("#valueAddLine").val("");
    })

    var array = [813, 820, 829, 870, 835, 859, 801, 812, 815, 817, 825, 852, 833, 834, 836, 858];
    for (var i = 0; i < array.length; i++) {
        var rowLine = "<li id='" + array[i] + "' class='list-group-item list-group-item-action'><input class='form-check-input me-2' type='checkbox'><input class='form-check-input me-2' type='checkbox'>" + array[i] + "</li>"
        $("#listGroupLine").append(rowLine);
    }

    $("#listGroupLine li").on("click", function(){
        console.log('asd');
    })
})

/*Time Function*/
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    } // add zero in front of numbers < 10
    return i;
  }
  
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();
  
  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  
  const formattedToday = dd + "/" + mm + "/" + yyyy;
  