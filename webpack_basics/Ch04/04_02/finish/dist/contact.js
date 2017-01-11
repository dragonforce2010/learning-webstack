var React = require('react');
var ReactDOM = require('react-dom');

class Contact extends React.Component {
	render() {
		return <div>Contact us</div>
	}
}

ReactDOM.render(<Contact />, document.getElementById('react-container'));