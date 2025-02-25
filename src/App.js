
import './App.css';
import Navbar from './components/Navbar';
import MyBabu from './components/MyBabu';

function App() {
  return (
    <div className="bg-black w-[100vw] overflow-y-hidden ">

      {/* Navbar Component  */}
      <div className=''>
        <Navbar/>
      </div>

     {/* MyBabu Component  */}
      <div id='mybabu' className=''>
        <MyBabu/>
      </div>
      
    </div>
  );
}

export default App;
