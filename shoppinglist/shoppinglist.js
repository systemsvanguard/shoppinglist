// Shopping List
var angularTodo = angular.module("angularTodo", []);

angularTodo.controller("angularTodoC", [
  "$scope",
  function($scope) {
    $scope.items = [
      { title: "Fresh Milk", status: "" },
      { title: "Bell Peppers", status: "" },
	  { title: "Iceberg Lettuce", status: "" },
      { title: "Eggs", status: "" }
    ];

    $scope.submitNewItem = function() {
      if ($scope.newItem) {
        $scope.items.push({ title: $scope.newItem });
        $scope.newItem = "";
      }
    };

    $scope.completeItem = function(index) {
      if ($scope.items[index].status == "completed") {
        $scope.items[index].status = "";
      } else {
        $scope.items[index].status = "completed";
      }
    };

    $scope.deleteItem = function(index) {
      $scope.items.splice(index, 1);
    };
  }
]);

