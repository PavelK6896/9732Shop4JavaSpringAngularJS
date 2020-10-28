app.config(function ($routeProvider) {
    console.log("$routeProvider")
    $routeProvider
        .when('/', {
            templateUrl: 'js/page/home1/home.html',
            controller: 'homeCtrl'
        })
        .when('/product', {
            templateUrl: 'js/page/product2/product.html',
            controller: 'productCtrl'
        })
        .when('/about', {
            templateUrl: 'js/page/about3/about.html',
            controller: 'aboutCtrl'
        })
        .when('/cart', {
            templateUrl: 'js/page/cart5/cart.html',
            controller: 'cartCtrl'
        })
        .when('/add', {
            templateUrl: 'js/page/admin8/add_product.html',
            controller: 'addProductCtrl'
        })
        .when('/profile', {
            templateUrl: 'js/page/profile4/profile.html',
            controller: 'profileCtrl'
        })
        .when('/registration', {
            templateUrl: 'js/page/registration7/registration.html',
            controller: 'registrationCtrl'
        })
        .when('/description/:id', {
            templateUrl: 'js/page/description6/description.html',
            controller: 'descriptionCtrl'
        })

});
