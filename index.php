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
  <link href="node_modules/sweetalert2/dist/sweetalert2.all.min.js" rel="stylesheet">
  <link href="css/caculator.css" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="css/transition.css" />
  <link rel="stylesheet" type="text/css" href="css/ldld.min.css" />
  <link rel="stylesheet" type="text/css" href="css/loader.css" />
</head>

<body>
  <div class="container-fluid">

    <!-- Navbar -->
    <?php include 'Navbar.html'; ?>
    <!-- Section table -->
    <?php include $_GET['page'] ?>

    <?php include "Modals.html"; ?>
  </div>
  <script src="js/colored-toast.js"></script>
  <script src="js/bootstrap.bundle.min.js"></script>
  <script src="js/jquery-3.6.1.min.js"></script>
  <script src="js/jquery.dataTables.min.js"></script>
  <script src="js/dataTables.bootstrap5.min.js"></script>
  <script src="js/caculator.js"></script>
  <link rel="stylesheet" href="css/colored-toast.css" />
  <script src="js/anothers.js"></script>
  <script src="node_modules/sweetalert2/dist/sweetalert2.all.min.js"></script>
  <script src="node_modules/sweetalert2/dist/sweetalert2.min.js"></script>
  <?php
  $_GET['page'];
  if (isset($_GET['page']) && $_GET['page'] == 'Customers.html') {
    echo "<script src='js/Customers.js'></script>";
  } elseif (isset($_GET['page']) && $_GET['page'] == 'Users.html') {
    echo "<script src='js/Users.js'></script>";
  }
  ?>
</body>

</html>