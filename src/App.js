import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import MyBabu from './components/MyBabu';

function App() {
  return (
    <div className="bg-black w-[100vw]">

      {/* Navbar Component  */}
      <div className=''>
        <Navbar/>
      </div>

     {/* MyBabu Component  */}
      <div id='mybabu'>
        <MyBabu/>
      </div>
      
    </div>
  );
}

export default App;
