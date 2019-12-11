import * as apis from '../services/example'

export default {
  namespace: 'indexPage',
  state: {
    name: 'Chen',
    cnodeData: []
  },
  reducers: {
    setName(state, payload) {   // state 就是上面取下来的 state，payload 就是组件中传过来的参数
      console.log(payload)
      return {
        ...state,
        name: payload.data.name
      }
    },
    setCnodeDataList(state, payload) {
      console.log('payload...',payload.data)
      return {
        ...state,
        cnodeData: payload.data
      }
    }
  },
  effects: {
    *setNameAsync(action, {put, call}) {   // put 传入的是一个 action
      yield put({
        type: 'setName',
        data: {
          name: 'liujianli'
        }
      })
    },
    *testCnode(action, {put, call}) {
      let rel = yield call(apis.testCnode)
      if(rel.data) {
        console.log(rel.data.data)
        yield put({
          type: 'setCnodeDataList',
          data: rel.data.data
        })
      }
      
    }
  },
  subscriptions: {
    
  }
}