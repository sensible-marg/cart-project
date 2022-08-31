
import './App.css';
import Footer from './components/Footer';
import MyContainer from './components/MyContainer';
import Navbar from './components/Navbar';
import {BrowserRouter} from "react-router-dom";
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Navbar/>
      <MyContainer/>
      <Footer/>
      </BrowserRouter>      
    </div>
  );
}

export default App;
