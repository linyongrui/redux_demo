import './App.css';

import Count from './containers/count'
import store from './redux/store';

function App() {

  return (
    <Count store={store} />
  );
}

export default App;
