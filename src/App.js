
// import './App.css';
import './App.scss';
import NavBar from './Components/NavBar';
import NavBarContent from './Components/NavBarContent';
import BarContent from "./Components/BarContent";
import ContentSlide from "./Components/ContentSlide";
import HourlySalse from "./Components/HourlySalse";
import SalesByStation from "./Components/SalesByStation";
import { Routes,Route } from 'react-router-dom';
import List from './Components/List';
import Graph from './Components/Graph';
import ContainerHourly from './Components/ContainerHourly';

function App() {
  return (
   
  <div className='container'>
   
   <NavBar/>
 
   <div className="content">
   <NavBarContent/>
    <BarContent/>
    <ContentSlide/>
    <ContainerHourly/>
    <SalesByStation/>
   
 
   <Routes>

 

<Route path='/' element={<ContentSlide/>}>
<Route path='/' element={<List/>}/>
    <Route path='statics' element={<Graph/>}/>

</Route>
   
  
    </Routes>
  

    </div>



    
  </div>
  );
}

export default App;
