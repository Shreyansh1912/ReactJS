import './App.css';
import Bat from './Components/Bat'
import User from './Components/User';
import Ball from './Components/Ball'
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store ={store}>
        <Bat />
        <Ball />
        <User />
      </Provider>
  </div>
);
}

export default App;
