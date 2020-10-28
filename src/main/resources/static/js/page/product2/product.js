app.controller('productCtrl', function ($scope, $http, $window, $location, apiFactory) {

    $scope.one = 1
    $scope.two = 2
    $scope.three = 3



    //get product
    $scope.getPageProduct = () => {
        apiFactory.getPageProduct($scope, $http, 1)
    }
    $scope.getPageProduct()


    $scope.nextPage = (numberPage) => {

        if(numberPage != undefined || $scope.page.pageSize + 1 >= numberPage){
            apiFactory.getPageProduct($scope, $http, numberPage)
        }else{
            if ($scope.page.pageSize === $scope.page.pageNumber) {
                return
            }
            apiFactory.getPageProduct($scope, $http, $scope.page.pageNumber + 2)
        }
    }

    $scope.prePage = () => {

        if ($scope.page.pageNumber === 0) {
            return
        }
        apiFactory.getPageProduct($scope, $http, $scope.page.pageNumber)
    }


});


// $rootScope.$on("getListProductFilter", function (filter, dd) { //export
//     $scope.getListProductFilter(filter, dd );
// });
