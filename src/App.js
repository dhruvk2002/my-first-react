import logo from './logo.svg';
import './App.css';
import Page from './components/Page';
import Nav from './components/Nav';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Page/>
      <Footer/>
    </div>
  );
}

export default App;
