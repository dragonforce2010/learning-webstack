export class NavbarController {
    constructor($auth) {
        'ngInject';
        
        this.$auth = $auth;
        this.isAuthenticated = $auth.isAuthenticated;
    }
    
    logout() {
        this.$auth.logout();
    }
}