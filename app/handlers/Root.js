import React from 'react';

var App = module.exports = React.createClass({
  getInitialState(){
    return {page: 'Root'};
  },

  render(){
    return (
      <div>Page{this.state.page} handler</div>
    );
  }
});

//export default App;
