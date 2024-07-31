import logo from './logo.svg';
import './App.css';
import { useGlobalContext } from './Components/context';
import Navbar from './Components/navbar';
import Display from './Components/displayData';
import Footer from './Components/footer';
import Modal from './Components/modal';


function App() {


  return (
    <div> 
      <Modal />
      <Navbar />
      
      <Display />
      <Footer />
    </div>
  );
}

export default App;
