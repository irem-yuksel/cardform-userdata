import React, { Component } from 'react';

class Form extends Component {

	constructor(props) {
		super(props);
		this.state = {
			formID : this.props.formID,
			result : [],
			totalSessionTime : 0,
			noOfSubmissions : 0,
			noOfQuestions : 0,
			timeSpentArray : [],
		};
		this.renderResult = this.renderResult.bind(this);
		this.saveResult = this.saveResult.bind(this);
		this.renderForQuestion = this.renderForQuestion.bind(this);
		this.calculateTimeSpent = this.calculateTimeSpent.bind(this);
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
		
		if(res["message"] !== "No records found"){
			this.setState({
				result : res,
				noOfSubmissions : res.length,
			});
			this.state.result.map(this.renderResult);
		}

	}

	renderResult(line) {
		console.log(line);
		console.log(line.totalSessionTime);
		var totSessionTime = parseFloat(this.state.totalSessionTime) + parseFloat(line.totalSessionTime);
		this.setState({
			totalSessionTime : totSessionTime,
			noOfQuestions : line.data[1].length,
		});
		line.data[1].map(this.renderForQuestion);
	}

	renderForQuestion(question){
		console.log(question);
		var newTimeSpentArray = Array.apply(null, new Array( this.state.noOfQuestions )).map(Number.prototype.valueOf,0);
		if(question.fields.length !== 0){
			for(var i = 0; i < question.fields[0].events.length; i++){
				// newTimeSpentArray[] =+  question.fields[0].events[i];
			}
		}

		this.setState({
			timeSpentArray : newTimeSpentArray,
		});
	}

	calculateTimeSpent(item){
	return (
	<div>
		<p> The average time spent for Question #{this.state.timeSpentArray.indexOf(item)}: <b> {item} </b> </p>
	</div>
	);

	}


	render() {
		const timeContent = this.state.timeSpentArray.map(this.calculateTimeSpent);
		var aveSesTime = 0;
		if(this.state.noOfSubmissions !== 0){
			aveSesTime = parseFloat(this.state.totalSessionTime)/parseFloat(this.state.noOfSubmissions);
		}

		return (
			<div>	
				<h> Form ID: {this.props.formID} </h>
				<p> This form has <b> {this.state.noOfSubmissions} </b> submissions. </p>
				<p> <b> Average Total Session Time for this form: </b> {aveSesTime}	</p>
				{ timeContent }

			</div>		
		);
	}
}

export default Form;