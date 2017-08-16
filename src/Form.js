import React, { Component } from 'react';

class Form extends Component {

	constructor(props) {
		super(props);
		this.state = {
			formID : this.props.formID,
			result : null,
		};
		this.irem = this.irem.bind(this);
	}
	
	irem(){
		var url = "https://denis.jotform.pro/server.php?";
		var xhttp = new XMLHttpRequest();
	    xhttp.open("POST", url, true);
	    xhttp.setRequestHeader("Content-type", "application/json");
	    xhttp.send("action=getCardformData&formID=this.props.formID");
	    var response = xhttp.responseText;
	    this.setState({
    		result : response,
		});
	}

	render() {
		return (
			<div>
				<p>Lorem</p>	
			</div>		
		);
	}
}

export default Form;