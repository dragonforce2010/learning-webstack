export class MainController {
  constructor ($http) {
    'ngInject';

      this.$http = $http;
      this.getMessages();

  }
    getMessages() {
      var vm = this;
        this.$http.post('http://localhost:5000/api/message').then(function(result){
            vm.message = result.data;
        });
    }

    postMessage() {
        this.$http.post('http://localhost:5000/api/message', {msg: this.message});
    }

}
