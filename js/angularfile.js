var app = angular.module("s8", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/1", { templateUrl: "js/CustomersPage.html" })
    .when("/2", { templateUrl: "root/blue.html" })
    .otherwise({ template: "<h3>Chào bạn</h3>" });
});
