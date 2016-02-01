import React from 'react';

var App = module.exports = React.createClass({
  getInitialState(){
    return {page: 'Root'};
  },

  render(){
    return (
    <div>
		<div>Header Block</div>
		{this.props.children}
		<div>Footer Block</div>
	</div>
    );
  }
});

//export default App;
