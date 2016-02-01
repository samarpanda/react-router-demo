import React from 'react'
import Contactlist from './../components/contactlist'
import DATA from './../utils/data'


var App = module.exports = React.createClass({
  getInitialState(){
    return {page: 1};
  },

  render(){

    return (
      <div>Page{this.state.page}
      	<Contactlist contacts={DATA} />
      </div>
    );
  }
});

//export default App;
