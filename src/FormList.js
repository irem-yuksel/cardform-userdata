import React, { Component } from 'react';
import Form from './Form';

class FormList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			forms : [],
			tonextandbeyond : false,
			formID : null,
		};

		this.renderFormItem = this.renderFormItem.bind(this);
		this._onButtonClick = this._onButtonClick.bind(this);

	}

	componentWillMount() {
		global.JF.getForms((response) => {
			this.setState({
    			forms: response,
			});
		});
	}

	_onButtonClick(id) {
		console.log(id);
		this.setState({
			tonextandbeyond : true,
			formID : id,
		})
	}

	renderFormItem(form) {
		return (
			<tr key={ form.id }>
				<th>{ form.title }</th>
				<th> <button id= { form.id } onClick = { this._onButtonClick.bind(this, form.id) } > Select </button> </th>
			</tr>
		);
	}
		
	

	render() {
		const content = this.state.forms.map(this.renderFormItem);
		if( !this.state.tonextandbeyond ) {
			return (
				<div>
					<table>
						<thead>
							<tr>
							<th>Form Title</th>
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
		
		else return <Form formID = { this.state.formID } />;
	}
}

export default FormList;