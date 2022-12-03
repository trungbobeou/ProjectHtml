$(document).ready(function () {
    /*Time Function*/
    startTime();
    document.getElementById("calendar").innerHTML = formattedToday;


    /*Chance Function*/
    $("#addLine").on("click", function () {
        var lineAdd = $("#valueAddLine").val();
        console.log(lineAdd);
        var rowLine = "<li id='" + lineAdd + "' class='list-group-item list-group-item-action'><input class='form-check-input me-2' type='checkbox'><input class='form-check-input me-2' type='checkbox'>" + "<span class='text-danger'>" + lineAdd + "</span><button class='badge bg-danger float-end'><i class='fa-solid fa-xmark'></i></button></li>"
        $("#listGroupLine").append(rowLine);
        $("#chanceModal .modal-body").click();
    })

    $("#dellLine").on("click", function () {
        var lineAdd = $("#valueAddLine").val();
        console.log(lineAdd);
        $("#" + lineAdd).remove();
        $("#chanceModal .modal-body").click();
    })
    $("#closeChance").on("click", function () {
        //$("#listGroupLine").remove();
        $("#valueAddLine").val("");
    })

    $("#clearChance").on("click", function () {
        $("#listGroupLine li").remove();
    })

    var array = [
        {
            "line": "501",
            "name": "Nguyễn Thị Huỳnh Nhi"
        },
        {
            "line": "502",
            "name": "Trần Thị Yến Thanh"
        },
        {
            "line": "503",
            "name": "Hoàng Văn Hải"
        },
        {
            "line": "504",
            "name": "Đỗ Thanh Toàn"
        },
        {
            "line": "505",
            "name": "Lê Thị Thanh Ngọc"
        },
        {
            "line": "506",
            "name": "Nguyễn Thị Diệp"
        },
        {
            "line": "507",
            "name": "Nguyễn Thị Minh Thư"
        },
        {
            "line": "508",
            "name": "Lê Thị Thanh Hiền"
        },
        {
            "line": "601",
            "name": "Huỳnh Thị Kim Thoa"
        },
        {
            "line": "602",
            "name": "Đinh Thị Mai"
        },
        {
            "line": "603",
            "name": "Nguyễn Thị Trúc Mai"
        },
        {
            "line": "604",
            "name": "Nguyễn Trúc Thi"
        },
        {
            "line": "605",
            "name": "Lương Thị Thanh Hoa"
        },
        {
            "line": "606",
            "name": "Nguyễn Hà Linh Chi"
        },
        {
            "line": "607",
            "name": "Phạm Nguyễn Hoài Thương"
        },

    ];
    for (var i = 0; i < array.length; i++) {
        var rowLine = "<li id='" + array[i].line + "' class='list-group-item list-group-item-action'><input class='form-check-input me-2' type='checkbox'><input class='form-check-input me-2' type='checkbox'>" + "<span class='text-danger'>" + array[i].line + "</span><button class='badge bg-danger float-end'><i class='fa-solid fa-xmark'></i></button><span class='text-primary float-none'>   || " + array[i].name + "</span></li>"
        $("#listGroupLine").append(rowLine);

        // $.getJSON("http://localhost:3000/users/getusername/" + array[i].line, function (data) {
        //     for (var j = 0; j < data.result.length; j++) {
        //         console.log(data.result[j].display_name)
        //         var rowLine = "<li id='" + data.result[j].username + "' class='list-group-item list-group-item-action'><input class='form-check-input me-2' type='checkbox'><input class='form-check-input me-2' type='checkbox'>" + "<span class='text-danger'>" + data.result[j].username + "</span><button class='badge bg-danger float-end'><i class='fa-solid fa-xmark'></i></button><span class='text-primary float-end mr-5'>" + data.result[j].display_name + "</span></li>"
        //         $("#listGroupLine").append(rowLine);
        //     }
        // });
    }

    $("#listGroupLine li button").on("click", function () {
        var idli = $(this).closest('li').attr('id');
        console.log(idli);
        $("#" + idli).remove();
    })
})

$("#resetData").click();

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

function Toast(icon, title, text) {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-right',
        iconColor: 'white',
        customClass: {
            popup: 'colored-toast'
        },
        showConfirmButton: false,
        timerProgressBar: true
    });

    Toast.fire({
        icon: icon,
        title: title,
        text: text,
        timer: 3000
    })
}
