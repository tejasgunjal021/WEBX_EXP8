angular.module('bookApp', [])
    .controller('MainController', function ($scope, AuthService) {
        console.log("MainController Loaded"); // ✅ Debugging log

        // Authentication state
        $scope.isAuthenticated = AuthService.isAuthenticated();
        $scope.currentUser = AuthService.getCurrentUser();
        $scope.authMessage = '';
        $scope.authSuccess = false;
        $scope.credentials = {
            username: '',
            password: ''
        };
        $scope.searchQuery = ''; // Initialize search query

        // Books data
        $scope.books = [
            { title: 'The Immortals of Meluha', author: 'Amish Tripathi', genre: 'Mythology', year: 2010 },
            { title: 'The White Tiger', author: 'Aravind Adiga', genre: 'Fiction', year: 2008 },
            { title: 'Wings of Fire', author: 'A.P.J. Abdul Kalam', genre: 'Biography', year: 1999 },
            { title: 'Chanakyas Chant', author: 'Ashwin Sanghi', genre: 'Thriller', year: 2010 },
            { title: 'Train to Pakistan', author: 'Khushwant Singh', genre: 'Historical Fiction', year: 1956 },
            { title: 'Sita: Warrior of Mithila', author: 'Amish Tripathi', genre: 'Mythology', year: 2017 },
            { title: 'The God of Small Things', author: 'Arundhati Roy', genre: 'Fiction', year: 1997 },
            { title: 'Sacred Games', author: 'Vikram Chandra', genre: 'Thriller', year: 2006 },
            { title: 'Midnights Children', author: 'Salman Rushdie', genre: 'Fiction', year: 1981 },
            { title: 'The Glass Palace', author: 'Amitav Ghosh', genre: 'Historical Fiction', year: 2000 },
            { title: 'I Am Malala', author: 'Malala Yousafzai', genre: 'Biography', year: 2013 }
        ];
        
        // Login function using AuthService
        $scope.login = function () {
            var response = AuthService.login($scope.credentials);
            
            if (response.success) {
                $scope.isAuthenticated = true;
                $scope.currentUser = AuthService.getCurrentUser();
                $scope.authSuccess = true;
                $scope.authMessage = response.message;
            } else {
                $scope.authSuccess = false;
                $scope.authMessage = response.message;
            }
        };

        // Logout function
        $scope.logout = function () {
            AuthService.logout();
            $scope.isAuthenticated = false;
            $scope.currentUser = '';
            $scope.credentials = { username: '', password: '' };
            $scope.authMessage = 'You have been logged out';
            $scope.searchQuery = '';
        };
    });
