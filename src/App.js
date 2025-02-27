
import './App.css';
import Navbar from './components/Navbar';
import MyBabu from './components/MyBabu';
import Babus from './components/Babus';

function App() {
  return (
    <div className="  overflow-x-hidden ">

      {/* Navbar Component  */}
      <div className=''>
        <Navbar/>
      </div>

     {/* MyBabu Component  */}
      <div id='mybabu' className='overflow-x-hidden'>
        <MyBabu/>
      </div>

      {/* Babus Component  */}
      <div id='babus' className='mt-[4%]'>
        <Babus/>
      </div>
    
      
    </div>
  );
}

export default App;
