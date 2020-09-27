app.controller('productCtrl', function ($scope, $http, $window, $location, factory, $rootScope) {

    $scope.getPageProduct = () => {
        factory.getPageProduct($scope, $http, 1)
    }


    $scope.nextPage = () => {
        factory.getPageProduct($scope, $http, $scope.page.pageNumber + 2)
    }
    $scope.prePage = () => {
        factory.getPageProduct($scope, $http, $scope.page.pageNumber)
    }


    $scope.getPageProduct()


});




// $rootScope.$on("getListProductFilter", function (filter, dd) { //export
//     $scope.getListProductFilter(filter, dd );
// });
