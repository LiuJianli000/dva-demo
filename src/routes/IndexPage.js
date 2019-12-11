import React from 'react';
import {connect} from 'dva'
import * as apis from '../services/example'

class IndexPage extends React.Component {

  componentDidMount() {
    // apis.testCnode().then((res) => {
    //   console.log(res)
    // })
    apis.mockdata().then((res) => {
      console.log(res)
    })
  }

  handleChangeName = () => {
    this.props.dispatch({
      type: 'indexPage/setName',
      data: {
        name: 'HL'
      }
    })
  }
  handleChangeNameAsync = () => {
    this.props.dispatch({
      type: 'indexPage/setNameAsync',
      data: {
        name: 'HL'
      }
    })
  }
  testCnode = () => {
    this.props.dispatch({
      type: 'indexPage/testCnode'
    })
  }
  render() {
    // console.log('this.props', this.props)
    const {msg, name, cnodeData} = this.props
    console.log(cnodeData[0])
    return (
      <div>
        <h1>I'm home</h1>
        <h3>{msg}</h3>
        <h3>{name}</h3>
        <button onClick={this.handleChangeName}>setName</button>
        <button onClick={this.handleChangeNameAsync}>setNameAsync</button>
        <button onClick={this.testCnode}>testCnode</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('state...', state)
  return {
    msg: "i love beijing",
    name: state.indexPage.name,
    cnodeData: state.indexPage.cnodeData
  }
}
export default connect(mapStateToProps)(IndexPage)