import React from 'react'
import {Link} from 'dva/router'
import Child from '../components/Child'
class UserPage extends React.Component {
  handlePageToIndex = () => {
    // console.log(this.props)
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <h2>I'm UserPage...</h2>
        <Link to="/">home</Link>
        <button onClick={this.handlePageToIndex}>home</button>
        <Child />
      </div>
    )
  }
}

export default UserPage