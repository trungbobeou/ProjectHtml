$(document).ready(function () {
  $("#customersTable").DataTable({
    scrollY: 550,
    scrollX: true,
    searching: false
  });

  function loadAllCustomer() {
    $.getJSON("http://localhost:3000/customers", function (data) {

    }).done(function (data) {
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
        rows += "<td>" + data.result[i].address1 + " - " + data.result[i].ward_name + " - " + data.result[i].district_name + " - " + data.result[i].province_name + "</td>";
        rows += "<td>" + datefull + "</td>";
        rows += "</tr>";
      }
      $("#customersBody tr").remove();
      $("#customersBody").append(rows);
      Toast("success", "Success,", "Loading data completed");
      $("#loaderdiv").removeClass("loader");
      $("#lmaskdiv").removeClass("lmask");
    }).fail(function () {
      Toast("error", "Error", "Failed to load data from database");
    }).always(function () {

    });
  }

  function loadCustomerTel(sdt) {
    $.getJSON("http://localhost:3000/customers/gettel/" + sdt, function (data) {

    }).done(function (data) {
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
          day + "/" + month + "/" + year + " " + hour + ":" + min + ":" + second;

        rows += "<tr id='table2'>";
        rows += "<td>" + i + "</td>";
        rows += "<td>" + data.result[i].customer_code + "</td>";
        rows += "<td>" + data.result[i].customer_name + "</td>";
        rows += "<td>" + data.result[i].tel + "</td>";
        rows += "<td>" + data.result[i].tel2 + "</td>";
        rows += "<td>" + data.result[i].address1 + " - " + data.result[i].ward_name + " - " + data.result[i].district_name + " - " + data.result[i].province_name + "</td>";
        rows += "<td>" + datefull + "</td>";
        rows += "</tr>";
      }
      $("#customersBody tr").remove();
      $("#customersBody").append(rows);
      Toast("success", "Success,", "Loading data completed");
      $("#loaderdiv").removeClass("loader");
      $("#lmaskdiv").removeClass("lmask");
    }).fail(function () {
      Toast("error", "Error", "Failed to load data from database");
    }).always(function () {

    });
  }

  function loadCustomerTel2(sdt) {
    $.getJSON(
      "http://localhost:3000/customers/gettel2/" + sdt,
      function (data) {

      }).done(function (data) {
        var rows;
        for (var i = 0; i < data.result.length; i++) {
          const date = data.result[i].created_on_date;
          const year = date.substring(0, 4);
          const month = date.substring(5, 7);
          const day = date.substring(8, 10);
          const hour = date.substring(11, 13);
          const min = date.substring(14, 16);
          const second = date.substring(17, 19);
          const datefull = day + "/" + month + "/" + year + " " + hour + ":" + min + ":" + second;

          rows += "<tr id='table2'>";
          rows += "<td>" + i + "</td>";
          rows += "<td>" + data.result[i].customer_code + "</td>";
          rows += "<td>" + data.result[i].customer_name + "</td>";
          rows += "<td>" + data.result[i].tel + "</td>";
          rows += "<td>" + data.result[i].tel2 + "</td>";
          rows += "<td>" + data.result[i].address1 + " - " + data.result[i].ward_name + " - " + data.result[i].district_name + " - " + data.result[i].province_name + "</td>";
          rows += "<td>" + datefull + "</td>";
          rows += "</tr>";
        }
        $("#customersBody tr").remove();
        $("#customersBody").append(rows);
        Toast("success", "Success,", "Loading data completed");
        $("#loaderdiv").removeClass("loader");
        $("#lmaskdiv").removeClass("lmask");
      }).fail(function () {
        Toast("error", "Error", "Failed to load data from database");
      }).always(function () {

      });
  }

  function loadCustomerName(sdt) {
    $.getJSON(
      "http://localhost:3000/customers/getname/" + sdt,
      function (data) {

      }).done(function (data) {
        var rows;
        for (var i = 0; i < data.result.length; i++) {
          const date = data.result[i].created_on_date;
          const year = date.substring(0, 4);
          const month = date.substring(5, 7);
          const day = date.substring(8, 10);
          const hour = date.substring(11, 13);
          const min = date.substring(14, 16);
          const second = date.substring(17, 19);
          const datefull = day + "/" + month + "/" + year + " " + hour + ":" + min + ":" + second;

          rows += "<tr id='table2'>";
          rows += "<td>" + i + "</td>";
          rows += "<td>" + data.result[i].customer_code + "</td>";
          rows += "<td>" + data.result[i].customer_name + "</td>";
          rows += "<td>" + data.result[i].tel + "</td>";
          rows += "<td>" + data.result[i].tel2 + "</td>";
          rows += "<td>" + data.result[i].address1 + " - " + data.result[i].ward_name + " - " + data.result[i].district_name + " - " + data.result[i].province_name + "</td>";
          rows += "<td>" + datefull + "</td>";
          rows += "</tr>";
        }
        $("#customersBody tr").remove();
        $("#customersBody").append(rows);
        Toast("success", "Success,", "Loading data completed");
        $("#loaderdiv").removeClass("loader");
        $("#lmaskdiv").removeClass("lmask");
      }).fail(function () {
        Toast("error", "Error", "Failed to load data from database");
      }).always(function () {

      });
  }

  function loadCustomerCode(sdt) {
    $.getJSON(
      "http://localhost:3000/customers/getcode/" + sdt,
      function (data) {

      }).done(function (data) {
        var rows;
        for (var i = 0; i < data.result.length; i++) {
          const date = data.result[i].created_on_date;
          const year = date.substring(0, 4);
          const month = date.substring(5, 7);
          const day = date.substring(8, 10);
          const hour = date.substring(11, 13);
          const min = date.substring(14, 16);
          const second = date.substring(17, 19);
          const datefull = day + "/" + month + "/" + year + " " + hour + ":" + min + ":" + second;

          rows += "<tr id='table2'>";
          rows += "<td>" + i + "</td>";
          rows += "<td>" + data.result[i].customer_code + "</td>";
          rows += "<td>" + data.result[i].customer_name + "</td>";
          rows += "<td>" + data.result[i].tel + "</td>";
          rows += "<td>" + data.result[i].tel2 + "</td>";
          rows += "<td>" + data.result[i].address1 + " - " + data.result[i].ward_name + " - " + data.result[i].district_name + " - " + data.result[i].province_name + "</td>";
          rows += "<td>" + datefull + "</td>";
          rows += "</tr>";
        }
        $("#customersBody tr").remove();
        $("#customersBody").append(rows);
        Toast("success", "Success,", "Loading data completed");
        $("#loaderdiv").removeClass("loader");
        $("#lmaskdiv").removeClass("lmask");
      }).fail(function () {
        Toast("error", "Error", "Failed to load data from database");
      }).always(function () {

      });
  }

  function loadCustomerAddress(sdt) {
    $.getJSON(
      "http://localhost:3000/customers/getaddress/" + sdt,
      function (data) {

      }).done(function (data) {
        var rows;
        for (var i = 0; i < data.result.length; i++) {
          const date = data.result[i].created_on_date;
          const year = date.substring(0, 4);
          const month = date.substring(5, 7);
          const day = date.substring(8, 10);
          const hour = date.substring(11, 13);
          const min = date.substring(14, 16);
          const second = date.substring(17, 19);
          const datefull = day + "/" + month + "/" + year + " " + hour + ":" + min + ":" + second;

          rows += "<tr id='table2'>";
          rows += "<td>" + i + "</td>";
          rows += "<td>" + data.result[i].customer_code + "</td>";
          rows += "<td>" + data.result[i].customer_name + "</td>";
          rows += "<td>" + data.result[i].tel + "</td>";
          rows += "<td>" + data.result[i].tel2 + "</td>";
          rows += "<td>" + data.result[i].address1 + " - " + data.result[i].ward_name + " - " + data.result[i].district_name + " - " + data.result[i].province_name + "</td>";
          rows += "<td>" + datefull + "</td>";
          rows += "</tr>";
        }
        $("#customersBody tr").remove();
        $("#customersBody").append(rows);
        Toast("success", "Success,", "Loading data completed");
        $("#loaderdiv").removeClass("loader");
        $("#lmaskdiv").removeClass("lmask");
      }).fail(function () {
        Toast("error", "Error", "Failed to load data from database");
      }).always(function () {

      });
  }

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

  $("#resetData").on("click", function () {
    var table = $("#customersTable").DataTable();
    table.clear().draw();
    $("#loaderdiv").addClass("loader");
    $("#lmaskdiv").addClass("lmask");
    loadAllCustomer();
  })

  $("#resetData").click();
});
