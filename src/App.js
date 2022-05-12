import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar"
import TrgovinaLista from "./TrgovinaLista"
function App() {
  return (
   <>
    <Navbar />
    <div className="container-fluid">
   <TrgovinaLista />
    </div>
    </>
  );
  }
  export default App;
  
