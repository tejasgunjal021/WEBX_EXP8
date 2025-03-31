angular.module('bookApp').service('AuthService', function() {
    var currentUser = null; // Store the logged-in user
    
    // Hardcoded valid credentials
    var validUsers = [
        { username: "admin", password: "password123" },
        { username: "tejas", password: "tejas123" }
    ];

    return {
        login: function(credentials) {
            var user = validUsers.find(u => u.username === credentials.username && u.password === credentials.password);
            
            if (user) {
                currentUser = credentials.username;
                return { success: true, message: "Login Successful!" };
            } else {
                return { success: false, message: "Invalid Credentials!" };
            }
        },
        logout: function() {
            currentUser = null;
        },
        isAuthenticated: function() {
            return currentUser !== null;
        },
        getCurrentUser: function() {
            return currentUser;
        }
    };
});
