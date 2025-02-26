
import './App.css';
import Navbar from './components/Navbar';
import MyBabu from './components/MyBabu';

function App() {
  return (
    <div className=" w-[100vw] overflow-y-hidden ">

      {/* Navbar Component  */}
      <div className=''>
        <Navbar/>
      </div>

     {/* MyBabu Component  */}
      <div id='mybabu' className='overflow-y-hidden'>
        <MyBabu/>
      </div>
      
    </div>
  );
}

export default App;
