$(document).ready(function () {
  $("#customersTable").DataTable({
    scrollY: 550,
    scrollX: true,
    searching: false
  });

  function loadAllCustomer() {
    $.getJSON("http://localhost:3000/customers", function (data) {
      var rows;
      for (var i = 0; i < data.result.length; i++) {
        const date = data.result[i].created_on_date;
        const year = date.substring(0, 4);
        const month = date.substring(5, 7);
        const day = date.substring(8, 10);
        const hour = date.substring(11, 13);
        const min = date.substring(14, 16);
        const second = date.substring(17, 19);
        const datefull = day + "/" + month + "/" + year + " " + hour + ":" + min + ":" + second

        rows += "<tr>";
        rows += "<td>" + i + "</td>";
        rows += "<td>" + data.result[i].customer_code + "</td>";
        rows += "<td>" + data.result[i].customer_name + "</td>";
        rows += "<td>" + data.result[i].tel + "</td>";
        rows += "<td>" + data.result[i].tel2 + "</td>";
        rows += "<td>" + data.result[i].address1 + "</td>";
        rows += "<td>" + datefull + "</td>";
        rows += "</tr>";
      }
      $("#customersBody tr").remove();
      $("#customersBody").append(rows);
    });
  }

  function loadCustomerTel(sdt) {
    $.getJSON("http://localhost:3000/customers/gettel/" + sdt, function (data) {
      var rows;
      for (var i = 0; i < data.result.length; i++) {
        const date = data.result[i].created_on_date;
        const year = date.substring(0, 4);
        const month = date.substring(5, 7);
        const day = date.substring(8, 10);
        const hour = date.substring(11, 13);
        const min = date.substring(14, 16);
        const second = date.substring(17, 19);
        const datefull =
          day +
          "/" +
          month +
          "/" +
          year +
          " " +
          hour +
          ":" +
          min +
          ":" +
          second;

        rows += "<tr id='table2'>";
        rows += "<td>" + i + "</td>";
        rows += "<td>" + data.result[i].customer_code + "</td>";
        rows += "<td>" + data.result[i].customer_name + "</td>";
        rows += "<td>" + data.result[i].tel + "</td>";
        rows += "<td>" + data.result[i].tel2 + "</td>";
        rows += "<td>" + data.result[i].address1 + "</td>";
        rows += "<td>" + datefull + "</td>";
        rows += "</tr>";
      }
      $("#customersBody tr").remove();
      $("#customersBody").append(rows);
    });
  }

  function loadCustomerTel2(sdt) {
    $.getJSON(
      "http://localhost:3000/customers/gettel2/" + sdt,
      function (data) {
        var rows;
        for (var i = 0; i < data.result.length; i++) {
          const date = data.result[i].created_on_date;
          const year = date.substring(0, 4);
          const month = date.substring(5, 7);
          const day = date.substring(8, 10);
          const hour = date.substring(11, 13);
          const min = date.substring(14, 16);
          const second = date.substring(17, 19);
          const datefull =
            day +
            "/" +
            month +
            "/" +
            year +
            " " +
            hour +
            ":" +
            min +
            ":" +
            second;

          rows += "<tr id='table2'>";
          rows += "<td>" + i + "</td>";
          rows += "<td>" + data.result[i].customer_code + "</td>";
          rows += "<td>" + data.result[i].customer_name + "</td>";
          rows += "<td>" + data.result[i].tel + "</td>";
          rows += "<td>" + data.result[i].tel2 + "</td>";
          rows += "<td>" + data.result[i].address1 + "</td>";
          rows += "<td>" + datefull + "</td>";
          rows += "</tr>";
        }
        $("#customersBody tr").remove();
        $("#customersBody").append(rows);
      }
    );
  }

  function loadCustomerName(sdt) {
    $.getJSON(
      "http://localhost:3000/customers/getname/" + sdt,
      function (data) {
        var rows;
        for (var i = 0; i < data.result.length; i++) {
          const date = data.result[i].created_on_date;
          const year = date.substring(0, 4);
          const month = date.substring(5, 7);
          const day = date.substring(8, 10);
          const hour = date.substring(11, 13);
          const min = date.substring(14, 16);
          const second = date.substring(17, 19);
          const datefull =
            day +
            "/" +
            month +
            "/" +
            year +
            " " +
            hour +
            ":" +
            min +
            ":" +
            second;

          rows += "<tr id='table2'>";
          rows += "<td>" + i + "</td>";
          rows += "<td>" + data.result[i].customer_code + "</td>";
          rows += "<td>" + data.result[i].customer_name + "</td>";
          rows += "<td>" + data.result[i].tel + "</td>";
          rows += "<td>" + data.result[i].tel2 + "</td>";
          rows += "<td>" + data.result[i].address1 + "</td>";
          rows += "<td>" + datefull + "</td>";
          rows += "</tr>";
        }
        $("#customersBody tr").remove();
        $("#customersBody").append(rows);
      }
    );
  }

  function loadCustomerCode(sdt) {
    $.getJSON(
      "http://localhost:3000/customers/getcode/" + sdt,
      function (data) {
        var rows;
        for (var i = 0; i < data.result.length; i++) {
          const date = data.result[i].created_on_date;
          const year = date.substring(0, 4);
          const month = date.substring(5, 7);
          const day = date.substring(8, 10);
          const hour = date.substring(11, 13);
          const min = date.substring(14, 16);
          const second = date.substring(17, 19);
          const datefull =
            day +
            "/" +
            month +
            "/" +
            year +
            " " +
            hour +
            ":" +
            min +
            ":" +
            second;

          rows += "<tr id='table2'>";
          rows += "<td>" + i + "</td>";
          rows += "<td>" + data.result[i].customer_code + "</td>";
          rows += "<td>" + data.result[i].customer_name + "</td>";
          rows += "<td>" + data.result[i].tel + "</td>";
          rows += "<td>" + data.result[i].tel2 + "</td>";
          rows += "<td>" + data.result[i].address1 + "</td>";
          rows += "<td>" + datefull + "</td>";
          rows += "</tr>";
        }
        $("#customersBody tr").remove();
        $("#customersBody").append(rows);
      }
    );
  }

  function loadCustomerAddress(sdt) {
    $.getJSON(
      "http://localhost:3000/customers/getaddress/" + sdt,
      function (data) {
        var rows;
        for (var i = 0; i < data.result.length; i++) {
          const date = data.result[i].created_on_date;
          const year = date.substring(0, 4);
          const month = date.substring(5, 7);
          const day = date.substring(8, 10);
          const hour = date.substring(11, 13);
          const min = date.substring(14, 16);
          const second = date.substring(17, 19);
          const datefull =
            day +
            "/" +
            month +
            "/" +
            year +
            " " +
            hour +
            ":" +
            min +
            ":" +
            second;

          rows += "<tr id='table2'>";
          rows += "<td>" + i + "</td>";
          rows += "<td>" + data.result[i].customer_code + "</td>";
          rows += "<td>" + data.result[i].customer_name + "</td>";
          rows += "<td>" + data.result[i].tel + "</td>";
          rows += "<td>" + data.result[i].tel2 + "</td>";
          rows += "<td>" + data.result[i].address1 + "</td>";
          rows += "<td>" + datefull + "</td>";
          rows += "</tr>";
        }
        $("#customersBody tr").remove();
        $("#customersBody").append(rows);
      }
    );
  }

  loadAllCustomer();
  startTime();
  document.getElementById("calendar").innerHTML = formattedToday;

  $("#sdt").change(function () {
    var sdt = $("#sdt").val().toString();
    if (!sdt) {
      loadAllCustomer();
    } else {
      loadCustomerTel(sdt);
    }
  });

  $("#sdt2").change(function () {
    var sdt = $("#sdt2").val().toString();
    if (!sdt) {
      loadAllCustomer();
    } else {
      loadCustomerTel2(sdt);
    }
  });

  $("#makh").change(function () {
    var sdt = $("#makh").val().toString();
    if (!sdt) {
      loadAllCustomer();
    } else {
      loadCustomerCode(sdt);
    }
  });

  $("#tenkh").change(function () {
    var sdt = $("#tenkh").val().toString();
    if (!sdt) {
      loadAllCustomer();
    } else {
      loadCustomerName(sdt);
    }
  });

  $("#diachi").change(function () {
    var sdt = $("#diachi").val().toString();
    if (!sdt) {
      loadAllCustomer();
    } else {
      loadCustomerAddress(sdt);
    }
  });
});

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
