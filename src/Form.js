import React, { Component } from 'react';

class Form extends Component {

	constructor(props) {
		super(props);
		this.state = {
			formID : this.props.formID,
			result : [],
			totalSessionTime : 0,
			noOfSubmissions : 1,
		};
		this.renderResult = this.renderResult.bind(this);
		this.saveResult = this.saveResult.bind(this);
	}
	
	componentWillMount(){
		var url = "https://denis.jotform.pro/server.php?action=getCardformData&formID=72122391023948";
		// var url = "https://denis.jotform.pro/server.php?action=getCardformData&formID="+ {this.props.formID};

		fetch(url, {
			method: 'GET',
		 	// headers: {
		  //   'Accept': 'application/jsonp, text/plain, */*',
		  //   'Content-Type': 'application/jsonp',
		  //   'Access-Control-Allow-Origin': 'http://localhost:3000'
  		// 	},
		},).then(res=>res.json())
  		.then(res=> this.saveResult(res));
	}
	
	saveResult(res){
		console.log(res);
		this.setState({
			result : res,
			noOfSubmissions : res.length,
		});
		this.state.result.map(this.renderResult);

	}

	renderResult(line) {
		console.log(line);
		console.log(line.totalSessionTime);
		var totSessionTime = parseFloat(this.state.totalSessionTime) + parseFloat(line.totalSessionTime);
		this.setState({
			totalSessionTime : totSessionTime,
		});

	}

	render() {
		
		return (
			<div>	
				<h> Form ID: {this.props.formID} </h>
				<p> This form has <b> {this.state.noOfSubmissions} </b> submissions. </p>
				<p> <b> Average Total Session Time for this form: </b> { parseFloat(this.state.totalSessionTime)/parseFloat(this.state.noOfSubmissions) } </p>	


			</div>		
		);
	}
}

export default Form;