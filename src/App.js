import React, { Component } from 'react';
import Welcome from './Welcome';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


// var str1 = '[{"formID": "72151581223953", "event_id": "1500279370441_71934126423958_u2wObZp", "resolution": "1680x1050", "totalClickCount": 1, "userAgentString": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.86 Safari/537.36", "totalSessionTime": 2.528}, [{"qid": "id_3", "name": "fullname", "type": "control_fullname", "order": 0, "fields": [{"id": "first_3", "name": "q3_whatIs[first]", "type": "first", "order": 0, "value": -1, "events": [], "length": -1, "fieldfullTime": 0, "characterCounter": 0, "interactionCount": 0}, {"id": "last_3", "name": "q3_whatIs[last]", "type": "last", "order": 1, "value": -1, "events": [], "length": -1, "fieldfullTime": 0, "characterCounter": 0, "interactionCount": 0}], "viewFullTime": 1.681, "questionLength": 23, "totalClickCount": 0, "viewThroughTimes": [1681]}, {"qid": "id_12", "name": "textbox", "type": "control_textbox", "order": 1, "fields": [{"id": "input_12", "name": "q12_whatIs12", "type": "textbox", "order": 0, "value": -1, "events": [], "length": -1, "fieldfullTime": 0, "characterCounter": 0, "interactionCount": 0}], "viewFullTime": 0.847, "questionLength": 23, "totalClickCount": 1, "viewThroughTimes": [0, 847]}, {"qid": "id_1", "name": "email", "type": "control_email", "order": 2, "fields": [{"id": "input_1", "name": "q1_whatIs1", "type": "email", "order": 0, "value": -1, "events": [], "length": -1, "fieldfullTime": 0, "interactionCount": 0}], "viewFullTime": 0, "questionLength": 35, "totalClickCount": 0, "viewThroughTimes": [0]}, {"qid": "id_10", "name": "datetime", "type": "control_datetime", "order": 3, "fields": [{"id": "month_10", "name": "q10_whatIs10[month]", "type": "month", "order": 0, "value": -1, "events": [], "length": -1, "fieldfullTime": 0, "interactionCount": 0}, {"id": "day_10", "name": "q10_whatIs10[day]", "type": "day", "order": 1, "value": -1, "events": [], "length": -1, "fieldfullTime": 0, "interactionCount": 0}, {"id": "year_10", "name": "q10_whatIs10[year]", "type": "year", "order": 2, "value": -1, "events": [], "length": -1, "fieldfullTime": 0, "interactionCount": 0}, {"id": -1, "name": "", "type": "text", "order": 3, "value": "", "events": [], "length": 0, "fieldfullTime": 0, "interactionCount": 0}], "viewFullTime": 0, "questionLength": 27, "totalClickCount": 0, "viewThroughTimes": []}, {"qid": "id_11", "name": "radio", "type": "control_radio", "order": 4, "fields": [{"id": -1, "name": "q11_whatIs11", "type": "radio", "order": 0, "value": "Female", "events": [], "length": 6, "fieldfullTime": 0, "interactionCount": 0}, {"id": -1, "name": "q11_whatIs11", "type": "radio", "order": 1, "value": "Male", "events": [], "length": 4, "fieldfullTime": 0, "interactionCount": 0}], "viewFullTime": 0, "questionLength": 20, "totalClickCount": 0, "viewThroughTimes": []}, {"qid": "id_9", "name": "textarea", "type": "control_textarea", "order": 5, "fields": [], "viewFullTime": 0, "questionLength": 44, "totalClickCount": 0, "viewThroughTimes": []}]]';
// var str2 = '[{"formID": "72151581223953", "event_id": "1500279370441_71934126423958_u2wObZp", "resolution": "1680x1050", "totalClickCount": 1, "userAgentString": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.86 Safari/537.36", "totalSessionTime": 55}, [{"qid": "id_3", "name": "fullname", "type": "control_fullname", "order": 0, "fields": [{"id": "first_3", "name": "q3_whatIs[first]", "type": "first", "order": 0, "value": -1, "events": [], "length": -1, "fieldfullTime": 0, "characterCounter": 0, "interactionCount": 0}, {"id": "last_3", "name": "q3_whatIs[last]", "type": "last", "order": 1, "value": -1, "events": [], "length": -1, "fieldfullTime": 0, "characterCounter": 0, "interactionCount": 0}], "viewFullTime": 1.681, "questionLength": 23, "totalClickCount": 0, "viewThroughTimes": [1681]}, {"qid": "id_12", "name": "textbox", "type": "control_textbox", "order": 1, "fields": [{"id": "input_12", "name": "q12_whatIs12", "type": "textbox", "order": 0, "value": -1, "events": [], "length": -1, "fieldfullTime": 0, "characterCounter": 0, "interactionCount": 0}], "viewFullTime": 0.847, "questionLength": 23, "totalClickCount": 1, "viewThroughTimes": [0, 847]}, {"qid": "id_1", "name": "email", "type": "control_email", "order": 2, "fields": [{"id": "input_1", "name": "q1_whatIs1", "type": "email", "order": 0, "value": -1, "events": [], "length": -1, "fieldfullTime": 0, "interactionCount": 0}], "viewFullTime": 0, "questionLength": 35, "totalClickCount": 0, "viewThroughTimes": [0]}, {"qid": "id_10", "name": "datetime", "type": "control_datetime", "order": 3, "fields": [{"id": "month_10", "name": "q10_whatIs10[month]", "type": "month", "order": 0, "value": -1, "events": [], "length": -1, "fieldfullTime": 0, "interactionCount": 0}, {"id": "day_10", "name": "q10_whatIs10[day]", "type": "day", "order": 1, "value": -1, "events": [], "length": -1, "fieldfullTime": 0, "interactionCount": 0}, {"id": "year_10", "name": "q10_whatIs10[year]", "type": "year", "order": 2, "value": -1, "events": [], "length": -1, "fieldfullTime": 0, "interactionCount": 0}, {"id": -1, "name": "", "type": "text", "order": 3, "value": "", "events": [], "length": 0, "fieldfullTime": 0, "interactionCount": 0}], "viewFullTime": 0, "questionLength": 27, "totalClickCount": 0, "viewThroughTimes": []}, {"qid": "id_11", "name": "radio", "type": "control_radio", "order": 4, "fields": [{"id": -1, "name": "q11_whatIs11", "type": "radio", "order": 0, "value": "Female", "events": [], "length": 6, "fieldfullTime": 0, "interactionCount": 0}, {"id": -1, "name": "q11_whatIs11", "type": "radio", "order": 1, "value": "Male", "events": [], "length": 4, "fieldfullTime": 0, "interactionCount": 0}], "viewFullTime": 0, "questionLength": 20, "totalClickCount": 0, "viewThroughTimes": []}, {"qid": "id_9", "name": "textarea", "type": "control_textarea", "order": 5, "fields": [], "viewFullTime": 0, "questionLength": 44, "totalClickCount": 0, "viewThroughTimes": []}]]';
// var str3 = '[{"formID": "72142012423944", "event_id": "1500279392529_71971738323967_JKJbo6r", "resolution": "3440x1440", "totalClickCount": 1, "userAgentString": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36", "totalSessionTime": 2.454}, [{"qid": "id_1", "name": "email", "type": "control_email", "order": 0, "fields": [{"id": "input_1", "name": "q1_email", "type": "email", "order": 0, "value": -1, "events": [674], "length": -1, "fieldfullTime": 0.674, "characterCounter": 0, "interactionCount": 0}], "viewFullTime": 2.453, "questionLength": 5, "totalClickCount": 1, "viewThroughTimes": [2453]}, {"qid": "id_2", "name": "address", "type": "control_address", "order": 1, "fields": [{"id": "input_2_addr_line1", "name": "q2_address[addr_line1]", "type": "address_line_1", "order": 0, "value": -1, "events": [], "length": -1, "fieldfullTime": 0, "interactionCount": 0}, {"id": "input_2_addr_line2", "name": "q2_address[addr_line2]", "type": "address_line_2", "order": 1, "value": -1, "events": [], "length": -1, "fieldfullTime": 0, "interactionCount": 0}, {"id": "input_2_city", "name": "q2_address[city]", "type": "city", "order": 2, "value": -1, "events": [], "length": -1, "fieldfullTime": 0, "interactionCount": 0}, {"id": "input_2_state", "name": "q2_address[state]", "type": "state", "order": 3, "value": -1, "events": [], "length": -1, "fieldfullTime": 0, "interactionCount": 0}, {"id": "input_2_postal", "name": "q2_address[postal]", "type": "zip", "order": 4, "value": -1, "events": [], "length": -1, "fieldfullTime": 0, "interactionCount": 0}, {"id": -1, "name": "", "type": "text", "order": 5, "value": "", "events": [], "length": 0, "fieldfullTime": 0, "interactionCount": 0}], "viewFullTime": 0, "questionLength": 7, "totalClickCount": 0, "viewThroughTimes": [0]}]]';
// var strarray = [str1, str2, str3];

 
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
