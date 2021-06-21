//import logo from './logo.svg';
import './App.css';
import Hello from './components/hello/Hello';
import Sum from './components/sum/Sum';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello />
        <Sum a = {13} b = {17}/>
      </header>
    </div>
  );
}

export default App;
