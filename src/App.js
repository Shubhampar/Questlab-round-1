import './App.css';
// import AllRoutes from './components/AllRoutes';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
      <Footer/>
    </div>
  );
}

export default App;
