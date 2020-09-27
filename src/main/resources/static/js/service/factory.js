

app.factory('factory', [() => {

    const getPageProduct = ($scope, $http, pageNumber) => {
        $http({
            method: 'GET',
            url: 'http://localhost:8080/api/v1/products/' + pageNumber
        }).then((response) => {
            $scope.info = 'продукты страница'
            $scope.product = response.data.content;
            $scope.page = response.data.pageable;
        }, (response) => {
            $scope.info = 'сервер недоступен '
        });
    }

    return {
        getPageProduct
    };
}]);
