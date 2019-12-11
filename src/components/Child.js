import React from 'react'
import {withRouter} from 'dva/router'
class Child extends React.Component {
  handleLinkToIndex = () => {
    // console.log(this.props)
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <button onClick={this.handleLinkToIndex}>home_child</button>
      </div>
    )
  }
}

export default withRouter(Child)   // 写入一个路由