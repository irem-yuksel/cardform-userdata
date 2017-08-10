import React, { Component } from 'react';

class Welcome extends Component {

	render() {
		return (
			<div>
				<p>Lorem</p>
				<input
					type="button"
					value="Start"
					onClick={this.props.start}
				/>
			</div>
		);
	}
}

export default Welcome;
