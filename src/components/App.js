import logo from '../logo.png';
import '../App.css';
import Footer from './Footer/Footer';
import TopNavBar from './Navbar/TopNavBar';

function App() {
  return (
    <div className="App">
      <TopNavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <Footer />
    </div>
  );
}

export default App;
