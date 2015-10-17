import {Component} from 'react';
import ReactMixin from 'react-mixin';
import ReactMeteorData from 'react-meteor-data';

@ReactMixin.decorate(ReactMeteorData)
export default class ServerTest extends Component {
	getMeteorData() {
		return {
			// reactive data
		};
	}

	render() {
		return (
			<div>
				Server Test Page <i className="mui-mood" />
			</div>
		);
	}
}
