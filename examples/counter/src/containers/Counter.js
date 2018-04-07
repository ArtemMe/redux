import React from 'react'
//import doIncrement from '../actions'
import {connect} from 'react-redux'

const doIncrement = () => {
  return ({ type: 'INCREMENT' })
}

class Counter extends React.Component {
  
  onClick = () => {
    console.log(doIncrement());
    this.props.dispatch(doIncrement());
  }

  render(){
    return (
      <div>
        <button onClick={this.onClick}>жми</button>
        {this.props.count}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);