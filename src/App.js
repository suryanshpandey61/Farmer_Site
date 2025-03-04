
import './App.css';
import Navbar from './components/Navbar';
import MyBabu from './components/MyBabu';
import Babus from './components/Babus';
import Services from './components/Services';
import Work from './components/Work';
import FAQ from './components/FAQ';
import Contactus from './components/Contactus';

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
      <div id='babus' className='pt-[7%]  '>
        <Babus/>
      </div>

      {/* Services Component  */}
      <div id='services' className='pt-[7%]'>
        <Services/>
      
      </div>

      <div id='work' className='pt-[7%]'>
        <Work/>
      </div>

      <div id='faq' className='pt-[7%]'>
        <FAQ/>
      </div>

      <div id='contactus' className='pt-[9%]'>
        <Contactus/>
      </div>

    
      
    </div>
  );
}

export default App;
