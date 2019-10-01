//Instatiation of the AngularJS app
var app = angular.module("bunbun", ['ui.router']);

//App configuration - code for routing through pages using ui-router
app.config(function ($stateProvider, $urlRouterProvider) {

    //default route to homepage
    $urlRouterProvider.otherwise('/home');

    //defining states for UI Router
    $stateProvider.state({
        name: 'home',
        url: '/home',
        templateUrl: 'home.html'
    })
        .state({
            name: 'order',
            url: '/order',
            templateUrl: 'order.html'
        })
        .state({
            name: 'custom',
            url: '/custom',
            templateUrl: 'custom.html'
        })
        .state({
            name: 'cart',
            url: '/cart',
            templateUrl: 'cart.html'
        })
        .state({
            name: 'profile',
            url: '/profile',
            templateUrl: 'profile.html'
        })
});

//Global controller for the application
app.controller("bunbunCtrl", function ($scope) {
});

//Product Catalogue controller
app.controller("detailController", function ($scope) {
    //product details and scope variable initialization
    function init() {
        $scope.products = [
            {
                bunType: 'Original',
                bunGlaze: 'None',
                bunNum: 0,
                bunPic: 'images/cinnamon.jpg',
                bunDescription: 'What could be more inviting than the scent of homemade cinnamon rolls baking in the oven? Our ultimate original version combines a rich, buttery dough with the warming flavors of cinnamon and nutmeg. Drizzle these heavenly rolls with our simple glaze, and watch how quickly they disappear.',
                bunPrice: 0.89
            },
            {
                bunType: 'Walnut',
                bunGlaze: 'None',
                bunNum: 0,
                bunPic: 'images/walnut.jpeg',
                bunDescription: 'Full of buttery, cinnamon flavor, these Walnut Cinnamon Rolls are a holiday tradition at our Bakery!',
                bunPrice: 1.29
            },
            {
                bunType: 'Blackberry',
                bunGlaze: 'None',
                bunNum: 0,
                bunPic: 'images/blackberry1.jpg',
                bunDescription: 'Soft homemade cinnamon rolls made with fresh blackberries. Summer brunch or breakfast. Top these buns with your favourite glaze.',
                bunPrice: 0.89
            },
            {
                bunType: 'Caramel Peacan',
                bunGlaze: 'None',
                bunNum: 0,
                bunPic: 'images/original.jpg',
                bunDescription: 'Soft homemade cinnamon rolls made with crunchy peacan drizzled with caramel. Summer brunch or breakfast. Top these buns with your favourite glaze.',
                bunPrice: 1.00
            },
            {
                bunType: 'Gluten Free',
                bunGlaze: 'None',
                bunNum: 0,
                bunPic: 'images/glutenfree.jpg',
                bunDescription: 'What could be more inviting than the scent of homemade cinnamon rolls baking in the oven? Our ultimate original version combines a rich, buttery dough with the warming flavors of cinnamon and nutmeg. Even better, they\'re gluten free',
                bunPrice: 0.89
            },
            {
                bunType: 'Pumpkin Spice',
                bunGlaze: 'None',
                bunNum: 0,
                bunPic: 'images/pumpkin.jpg',
                bunDescription: 'Full of buttery, pumpkin spice flavor, these Rolls are perfect for the incoming fall harvest season!',
                bunPrice: 1.00
            },
        ];

        $scope.glazings = [
            'None', 'Sugar-Milk', 'Vanilla-Milk', 'Double-Chocolate'
        ];
        $scope.numbers = [1, 3, 6, 12];

        $scope.totalPrice = 0;
        $scope.isDetail = false;
    }
    init();

    //Show detailed view for the selected product
    $scope.getDetails = function (p) {
        $scope.isDetail = true;
        $scope.selectedProduct = p;
        $scope.selectedProduct.bunNum = "1";
        $scope.changeBunNum($scope.selectedProduct.bunNum);
    }
    //A watcher to update total price based on the selected bun quantity
    $scope.changeBunNum = function (n) {
        $scope.totalPrice = parseInt(n) * $scope.selectedProduct.bunPrice;
    }
    //Back to Product Catalgue view
    $scope.cancelDetailedView = function () {
        $scope.isDetail = false;
        $scope.totalPrice = 0;
        $scope.selectedProduct = {};
    }
});