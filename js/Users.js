$(document).ready(function () {
  $("#usersTable tfoot th").each(function () {
    var title = $(this).text();
    $(this).html('<input type="text" class="form-control" placeholder="Search ' + title + '" />');
  });

  $("#usersTable").DataTable({
    scrollY: 600,
    scrollX: true,
    pageLength: 50,
    processing: true,
    initComplete: function () {
      // Apply the search
      this.api()
        .columns()
        .every(function () {
          var that = this;

          $("input", this.footer()).on("keyup change clear", function () {
            if (that.search() !== this.value) {
              that.search(this.value).draw();
            }
          });
        });
    },
    columnDefs: [
      {
        target: 5,
        visible: false,
      },
      {
        target: 6,
        visible: false,
      },
    ],
  });

  $("#usersTable tbody").on("dblclick", "tr", function () {
    var table = $("#usersTable").DataTable();
    var data = table.row(this).data();
    $("#usernameEmployee").html(data[1]);
    $("#editEmployees").modal('show');
    $("#taikhoannv").val(data[1]);
    $("#matkhaunv").val(data[5]);
    $("#tennv").val(data[2]);
    $("#manv").val(data[6]);
  });

  $('#editEmployees').on('show.bs.modal', function (event) {
  })

  function loadAllUsers() {
    $.getJSON("http://localhost:3000/users", function (data) {
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

        var table = $("#usersTable").DataTable();
        table.row
          .add([
            i + 1,
            data.result[i].username,
            data.result[i].display_name,
            data.result[i].email,
            datefull,
            data.result[i].password,
            data.result[i].user_id,
          ])
          .draw();

        // rows += "<tr>";
        // rows += "<td>" + i + "</td>";
        // rows += "<td>" + data.result[i].username + "</td>";
        // rows += "<td>" + data.result[i].display_name + "</td>";
        // rows += "<td>" + data.result[i].email + "</td>";
        // rows += "<td>" + datefull + "</td>";
        // rows += "<td class='text-center'><button class='btn btn-primary' id='editnv'>Sửa</button></td>";
        // rows += "</tr>";
      }
      // $("#usersBody tr").remove();
      // $("#usersBody").append(rows);
    });
  }

  // function loadUserUserName(sdt) {
  //   $.getJSON("http://localhost:3000/users/getusername/" + sdt, function (data) {
  //     var rows;
  //     for (var i = 0; i < data.result.length; i++) {
  //       const date = data.result[i].created_on_date;
  //       const year = date.substring(0, 4);
  //       const month = date.substring(5,7);
  //       const day = date.substring (8, 10);
  //       const hour = date.substring (11, 13);
  //       const min = date.substring (14, 16);
  //       const second = date.substring (17, 19);
  //       const datefull = day + "/" + month + "/" + year + " " + hour + ":" + min + ":" + second

  //       rows += "<tr>";
  //       rows += "<td>" + i + "</td>";
  //       rows += "<td>" + data.result[i].username + "</td>";
  //       rows += "<td>" + data.result[i].display_name + "</td>";
  //       rows += "<td>" + data.result[i].email + "</td>";
  //       rows += "<td>" + datefull + "</td>";
  //       rows += "<td><button type='button' class='btn btn-primary' id='editnv'>Chi tiết</button></td>";
  //       rows += "</tr>";
  //     }
  //     $("#usersBody tr").remove();
  //     $("#usersBody").append(rows);
  //   });
  // }

  // function loadUserDisplayName(sdt) {
  //   $.getJSON(
  //     "http://localhost:3000/users/getdisplayname/" + sdt,
  //     function (data) {
  //       var rows;
  //       for (var i = 0; i < data.result.length; i++) {
  //         const date = data.result[i].created_on_date;
  //         const year = date.substring(0, 4);
  //         const month = date.substring(5,7);
  //         const day = date.substring (8, 10);
  //         const hour = date.substring (11, 13);
  //         const min = date.substring (14, 16);
  //         const second = date.substring (17, 19);
  //         const datefull = day + "/" + month + "/" + year + " " + hour + ":" + min + ":" + second

  //         rows += "<tr>";
  //         rows += "<td>" + i + "</td>";
  //         rows += "<td>" + data.result[i].username + "</td>";
  //         rows += "<td>" + data.result[i].display_name + "</td>";
  //         rows += "<td>" + data.result[i].email + "</td>";
  //         rows += "<td>" + datefull + "</td>";
  //         rows += "<td><button type='button' class='btn btn-primary' id='editnv'>Chi tiết</button></td>";
  //         rows += "</tr>";
  //       }
  //       $("#usersBody tr").remove();
  //       $("#usersBody").append(rows);
  //     }
  //   );
  // }

  loadAllUsers();

  // $("#taikhoan").change(function () {
  //   var sdt = $("#taikhoan").val().toString();
  //   if (!sdt) {
  //     loadAllUsers();
  //   } else {
  //     loadUserUserName(sdt);
  //   }
  // });

  // $("#tennv").change(function () {
  //   var sdt = $("#tennv").val().toString();
  //   if (!sdt) {
  //     loadAllUsers();
  //   } else {
  //     loadUserDisplayName(sdt);
  //   }
  // });

  // $( "#editnv" ).on( "click", function() {
  //   console.log('asd');
  // });
})