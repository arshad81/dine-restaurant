import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Features from './Features';
import Highlights from './Highlights';
import SocialEvents from './SocialEvents';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Features/>
      <Highlights/>
      <SocialEvents/>
      <Footer />
    </div>
  );
}

export default App;
