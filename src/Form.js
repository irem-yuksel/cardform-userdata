import React, { Component } from 'react';

class Form extends Component {

	constructor(props) {
		super(props);
		this.state = {
			formID : this.props.formID,
			result : null,
		};
		this.renderResult = this.renderResult.bind(this);
	}
	
	componentWillMount(){
		var url = "https://denis.jotform.pro/server.php?action=getCardformData&formID=72122391023948";
		// var url = "https://denis.jotform.pro/server.php?action=getCardformData&formID="+ {this.props.formID};

		fetch(url, {
			method: 'POST',
		 	headers: {
		    'Accept': 'application/jsonp, text/plain, */*',
		    'Content-Type': 'application/jsonp',
		    'Access-Control-Allow-Origin': 'http://localhost:3000'
  			},
		}).then(res=>res.json())
  		.then(res=> this.renderResult(res));
	}


	renderResult(line) {

		console.log(line);
		var data = line[0].data;
		console.log(data);	
		var iremof=JSON.parse(data["1"]);
		console.log(data["1"]);	
		console.log(iremof);	
		console.log(data["1"].length);	
		console.log(iremof.length);	
		 

	}

	render() {
		// const content = (this.state.result.map(this.renderResult);
		return (
			<div>
								
			</div>		
		);
	}
}

export default Form;