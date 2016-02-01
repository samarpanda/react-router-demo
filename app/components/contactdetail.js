import React from 'react';
import { render } from 'react-dom';
import DATA from './../utils/data';

function getContactByID(id){
  for (let i = 0; i < DATA.length; ++i)
    if (DATA[i]._id === id)
      return DATA[i]
  return null
}

const App = module.exports = React.createClass({
	getInitialState(){
		return {}
	},
	render(){
		const { userID } = this.props.params
		const contact = getContactByID(userID);
		return <div>
		Details Page:
		<p>{contact.name}<br/> {contact.phone}</p>
		</div>;
	}
});

//export default App