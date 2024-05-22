import logo from './logo.svg';
import './App.css';
import Navigation from './cutomer/components/navigation/navigation';
import HomePage from './cutomer/pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Navigation/>
     <div>
      <HomePage/>
     </div>
    </div>
  );
}

export default App;
