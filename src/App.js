
import './App.css';
import Header from './Components/Header/Header';
import { useEffect } from 'react';
import Main from './Components/Main/Main';
import Bottom from './Components/BottomMenu/Bottom';



function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Bottom />
    </div>
  );
}

export default App;
