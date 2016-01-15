import React from 'react';

var App = module.exports = React.createClass({
  getInitialState(){
    return {page: 2};
  },

  render(){
    return (
      <div>Page{this.state.page} handler</div>
    );
  }
});

//export default App;
