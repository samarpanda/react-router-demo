
import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'

var selectedContactId = 0;

var App = React.createClass({

	getInitialState() {
		return {
			contacts: [],
			loaded: false
		}
	},

	componentDidMount () {
		this.setState({
			contacts: this.props.contacts,
			loaded: true
		});
	},

	render () {
		var contacts = this.props.contacts.map((contact) => {
			return <li key={contact._id}>
				<Link to={`/page1/${contact._id}`}>{contact.name}</Link>
			</li>
		});

		return <div>
			<ul>
				{contacts}
			</ul>
		</div>;
	}

});

export default App;
