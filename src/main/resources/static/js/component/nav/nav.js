app.directive('navBar', () => {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'js/component/nav/nav.html',
        link: (scope, element, attrs, ctrl, transclude) => {
            transclude(scope, (clone, scope) => {
                element.append(clone);
            });
        }
    }
});



app.controller('navBarCtrl', ($scope, $http, $localStorage) => {


    $scope.text1 = ''
    $scope.admin = false
    $scope.auth = false;
    $scope.name = ''

    if ($localStorage.currentUser) {
        console.log($localStorage.currentUser)
        $scope.text1 = "Authentication ok"
        $scope.auth = true;
        $scope.name = 'Name ' + $localStorage.currentUser.username
        // if (userData.role === 'ROLE_ADMIN') {
        //     $scope.admin = true
        // }
        $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
    }

    $scope.login = () => {
        let user = {
            password: $scope.password,
            username: $scope.username
        }
        $http({
            method: 'POST',
            url: contextPath + '/auth',
            headers: {
                'Content-Type': 'application/json'
            },
            data: user
        }).then((response) => {
            console.log('ok ', response)
            if (response.data.token) {
                $scope.text1 = "Authentication ok"
                $scope.auth = true;
                $scope.name = user.username
                console.log('response.data.token', response.data.token)
                // if (userData.role === 'ROLE_ADMIN') {
                //     $scope.admin = true
                // }

                console.log('user', user)
                $http.defaults.headers.common.Authorization = 'Bearer ' + response.data.token;
                $localStorage.currentUser = {username: user.username, token: response.data.token};
            }
        }, (response) => {
            console.log("error ", response)
            $scope.text1 = "Authentication failed"
        });

    };

    $scope.logout = () => {
        console.log("logout")
        delete $localStorage.currentUser;
        $http.defaults.headers.common.Authorization = '';

        $scope.auth = false
        $scope.admin = false
        $scope.name = ''
        $scope.text1 = ''
    }
})

