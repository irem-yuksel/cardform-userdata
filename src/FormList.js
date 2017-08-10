import React, { Component } from 'react';

class FormList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			forms : [],
		};
		this.renderFormItem = this.renderFormItem.bind(this);
	}

	componentWillMount() {
		global.JF.getForms((response) => {
			this.setState({
    			forms: response,
			});
		});
	}

	renderFormItem(form) {
		return (
			<tr key={ form.id }>
				<th>{ form.title }</th>
				<th>
					<input
						type="button"
						value="Select"
					/>
				</th>
			</tr>
		);
	}

	render() {
		const content = this.state.forms.map(this.renderFormItem);

		return (
			<div>
				<table>
					<thead>
						<tr>
						<th>Form ID</th>
						<th>Select</th>
						</tr>
					</thead>
					<tbody>
					{ content }
					</tbody>
				</table>
			</div>
		);
	}
}

export default FormList;