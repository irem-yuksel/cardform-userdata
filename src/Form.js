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
			leftQuestions : [],
		};
		this.renderResult = this.renderResult.bind(this);
		this.saveResult = this.saveResult.bind(this);
		this.calculateTimeSpent = this.calculateTimeSpent.bind(this);
		this.calculateLeftQuestions = this.calculateLeftQuestions.bind(this);
	}
	
	componentWillMount(){
		var url = "https://denis.jotform.pro/server.php?action=getCardformData&formID=72122391023948";
		// var url = "https://denis.jotform.pro/server.php?action=getCardformData&formID="+ {this.props.formID};

		fetch(url, {
			method: 'GET',
		},).then(res=>res.json())
  		.then(res=> this.saveResult(res));
	}
	
	saveResult(res){
		console.log(res);
		
		if(res["message"] !== "No records found"){
			this.setState({
				result : res,
				noOfSubmissions : res.length,
				timeSpentArray : Array.apply(null, new Array( res[0].data[1].length )).map(Number.prototype.valueOf,0),
				leftQuestions : Array.apply(null, new Array( res[0].data[1].length )).map(Number.prototype.valueOf,0),
			});
			this.state.result.map(this.renderResult);
		}

	}

	renderResult(line) {
		console.log(line);
		var totSessionTime = parseFloat(this.state.totalSessionTime) + parseFloat(line.totalSessionTime);
		var newTimeSpentArray = Array.apply(null, new Array( line.data[1].length )).map(Number.prototype.valueOf,0);
		var newLeftQuestions = Array.apply(null, new Array( line.data[1].length )).map(Number.prototype.valueOf,0);
		console.log(newLeftQuestions);

		for(var i = 0; i < line.data[1].length; i++){
			newTimeSpentArray[i] = parseFloat(newTimeSpentArray[i]) + parseFloat(line.data[1][i].viewFullTime) + parseFloat(this.state.timeSpentArray[i]);
			newLeftQuestions[i] = parseFloat(newLeftQuestions[i]) + parseFloat(this.state.leftQuestions[i]);

			if(line.data[1][i].viewFullTime === 0){
				newLeftQuestions[i] = parseFloat(newLeftQuestions[i]) + parseFloat(1);
			}	
		}

		console.log(newTimeSpentArray);
		console.log(newLeftQuestions);

		this.setState({
			totalSessionTime : totSessionTime,
			noOfQuestions : line.data[1].length,
			timeSpentArray : newTimeSpentArray,
			leftQuestions : newLeftQuestions,
		});
	}

	calculateTimeSpent(item, index){
		return (
			<div>
				<p> The average time spent for Question {index+1}: <b> {item / this.state.noOfSubmissions} </b> </p>
			</div>
		);
	}


	calculateLeftQuestions(item, index){
		if(item !== 0 || !isNaN(item)){
			return (
				<div>
					<p> <b> {item} </b> people did not see Question #{index+1}. </p>
				</div>
			);
		}
	}

	render() {
		const timeContent = this.state.timeSpentArray.map(this.calculateTimeSpent);
		var aveSesTime = 0;
		if(this.state.noOfSubmissions !== 0){
			aveSesTime = parseFloat(this.state.totalSessionTime)/parseFloat(this.state.noOfSubmissions);
		}
		const leftContent = this.state.leftQuestions.map(this.calculateLeftQuestions);

		return (
			<div>	
				<h> Form ID: {this.props.formID} </h>
				<p> This form has <b> {this.state.noOfSubmissions} </b> submissions. </p>
				<p> <b> Average Total Session Time for this form: </b> {aveSesTime}	</p>
				{ timeContent }
				{ leftContent }
			</div>		
		);
	}
}

export default Form;