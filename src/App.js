import './App.css';
import Converter from './components/converter/Converter';
import Menu from './components/menu/Menu';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Converter></Converter>
    </div>
  );
}

export default App;
