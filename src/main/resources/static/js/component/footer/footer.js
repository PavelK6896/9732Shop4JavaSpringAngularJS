app.directive('footerBar', () => {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'js/component/footer/footer.html',
        link: (scope, element, attrs, ctrl, transclude) => {
            transclude(scope, (clone, scope) => {
                element.append(clone);
            });
        }
    }
});


app.controller('footerCtrl', ($scope) => {


})
