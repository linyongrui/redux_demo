
import store from './redux/store';
import { Provider } from 'react-redux'

import Count from './containers/Count'
import Person from './containers/Person'

import './App.css';


function App() {

  return (
    <Provider store={store}>
      <Count />
      <hr></hr>
      <Person />
    </Provider>
  );
}

export default App;
