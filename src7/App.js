import './App.css';

import Count from './containers/count'
import store from './redux/store';
import { Provider } from 'react-redux'

function App() {

  return (
    <Provider store={store}>
      <Count />
    </Provider>
  );
}

export default App;
