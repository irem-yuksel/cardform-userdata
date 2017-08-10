import React, { Component } from 'react';
import Welcome from './Welcome';
import FormList from './FormList';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

 
class App extends Component {
	constructor(props) {
		super(props);

		this.start = this.start.bind(this);
		this.onLoginSuccess = this.onLoginSuccess.bind(this);
		this.onLoginFailure = this.onLoginFailure.bind(this);
		this.state = {
			apiKey: null, 
		};
	}

	render() {
		if (this.state.apiKey === null) {
			return <Welcome start={this.start} />
		} else {
			return <FormList apiKey={this.state.apiKey} />
		}
	}

	onLoginSuccess() {
		this.setState({
			apiKey: global.JF.getAPIKey(),
		});
	}

	onLoginFailure() {
		console.log(arguments);
	}
	
	start(){
		console.log(this);
		global.JF.login(this.onLoginSuccess, this.onLoginFailure); 
	}
}

export default App;
