

app.factory('factory', [() => {

    const getListProduct = ($scope, $http) => {
        $http({
            method: 'GET',
            url: 'http://localhost:8080/api/v1/products'
        }).then((response) => {
            $scope.info = 'все продукты '
            $scope.product = response.data;
        }, (response) => {
            $scope.info = 'сервер недоступен '
        });
    }

    const getPageProduct = ($scope, $http, pageNumber) => {
        $http({
            method: 'GET',
            url: 'http://localhost:8080/api/v1/products/' + pageNumber
        }).then((response) => {
            $scope.info = 'продукты страница 1'
            $scope.product = response.data.content;
            $scope.page = response.data.pageable;
        }, (response) => {
            $scope.info = 'сервер недоступен '
        });
    }

    return {
        getListProduct,
        getPageProduct
    };
}]);
