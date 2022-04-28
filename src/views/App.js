import React, { Component } from 'react';
import { connect } from 'react-redux';
import Upload from './upload';

class AppVisual extends Component {
  //constructor(props) {
  //  super(props);
  //}
  // componentWillReceiveProps (nextProps) {
  // }
  //componentDidMount(){
  //}
  render() {
    const {step} = this.props;
    console.log(step);

    let content = null;

    switch(step){
      case 'edit':
        //
        break;
      default:
        content = <Upload/>;
    };

    return <div className="app">
      {content}
    </div>;
  }
};

/* REDUX ***************************/

function mapStateToProps(state) {
  const {step} = state;
  return {step};
}

const App = connect(
  mapStateToProps,
  null
)(AppVisual);

export default App;