export class AuthController {
    
    constructor($auth){
        'ngInject';
        
        this.$auth = $auth;
    }
    
    register() {
        this.$auth.signup(this.user);
    }
}