<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css">
  <link href="css/dataTables.bootstrap5.min.css" rel="stylesheet" type="text/css">
  <link href="node_modules/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet" type="text/css">
  <link href="css/mycss.css" rel="stylesheet" type="text/css">
  <link href="node_modules/@fortawesome/fontawesome-free/css/fontawesome.css" rel="stylesheet">
  <link href="node_modules/@fortawesome/fontawesome-free/css/brands.css" rel="stylesheet">
  <link href="node_modules/@fortawesome/fontawesome-free/css/solid.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">
  <link rel="stylesheet" href="css/caculator.css">
</head>

<body>
  <div class="container-fluid">
    <!-- Navbar -->
    <?php include 'Navbar.html'; ?>
    <!-- Section table -->
    <?php include "Customers.html"; ?>
    <?php include "Users.html"; ?>
    <?php include "Modals.html"; ?>
  </div>
  <script src="js/bootstrap.bundle.min.js"></script>
  <script src="js/jquery-3.6.1.min.js"></script>
  <script src="js/Customer.js"></script>
  <script src="js/Users.js"></script>
  <script src="js/jquery.dataTables.min.js"></script>
  <script src="js/dataTables.bootstrap5.min.js"></script>
  <script src="js/caculator.js"></script>
  <script src="js/anothers.js"></script>
  <script>
    $(document).ready(function () {
      $("#resetData").click();
    })
  </script>
</body>

</html>