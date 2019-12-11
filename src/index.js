import dva from 'dva';
import './index.css';
import {createBrowserHistory as createHistory} from 'history';   // 修改下官方的写法
import products from './models/products'
import indexPage from './models/indexPage'
// 1. Initialize
// const app = dva();
const app = dva({
  initialState: {
    products: [
      { name: 'dva', id: 1 },
      { name: 'antd', id: 2 },
    ],
  },
  history: createHistory(),
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(products);
app.model(indexPage);


// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
