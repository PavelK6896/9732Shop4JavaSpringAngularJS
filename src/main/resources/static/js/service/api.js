

app.factory('apiFactory', [() => {

    const getPageProduct = ($scope, $http, pageNumber) => {
        $http({
            method: 'GET',
            url: contextPath + '/api/v1/products/' + pageNumber
        }).then((response) => {

            $scope.info = 'продукты страница'
            $scope.product = response.data.content;
            console.log($scope.product)
            $scope.page = response.data.pageable;

        }, (response) => {
            $scope.info = 'сервер недоступен '
        });
    }

    return {
        getPageProduct
    };
}]);
