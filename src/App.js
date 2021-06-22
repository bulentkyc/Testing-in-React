//import logo from './logo.svg';
import './App.css';
import Hello from './components/hello/Hello';
import Sum from './components/sum/Sum';
import Toggle from './components/toggle/Toggle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello />
        <Sum a = {13} b = {17}/>
        <Toggle onChange = {val => val}/>
      </header>
    </div>
  );
}

export default App;
