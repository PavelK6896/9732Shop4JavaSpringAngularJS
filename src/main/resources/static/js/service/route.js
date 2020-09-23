app.config(function ($routeProvider) {
    console.log("$routeProvider")
    $routeProvider
        .when('/', {
            templateUrl: 'js/page/home/home.html',
            controller: 'homeCtrl'
        })
        .when('/product', {
            templateUrl: 'js/page/product/product.html',
            controller: 'productCtrl'
        })
        .when('/about', {
            templateUrl: 'js/page/about/about.html',
            controller: 'aboutCtrl'
        })
        .when('/cart', {
            templateUrl: 'js/page/cart/cart.html',
            controller: 'cartCtrl'
        })
        .when('/add', {
            templateUrl: 'js/page/admin/add_product.html',
            controller: 'addProductCtrl'
        })
        .when('/profile', {
            templateUrl: 'js/page/profile/profile.html',
            controller: 'profileCtrl'
        })
        .when('/registration', {
            templateUrl: 'js/page/registration/registration.html',
            controller: 'registrationCtrl'
        })
        .when('/description/:id', {
            templateUrl: 'js/page/description/description.html',
            controller: 'descriptionCtrl'


        })

});
