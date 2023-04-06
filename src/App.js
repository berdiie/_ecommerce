
import './App.css';
import Firstpage from './pages/Firstpage';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Secondpage from './pages/Secondpage';
import Thirdpage from './pages/Thirdpage';
import Fourthpage from './pages/Fourthpage';
import Fifthpage from './pages/Fifthpage';
import Sixthpage from './pages/Sixthpage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Firstpage/>}></Route>
        <Route path="/shop" element={<Secondpage/>}></Route>
        <Route path="/detail/:id" element={<Thirdpage/>}></Route>
        <Route path="/cart" element={<Fourthpage/>}></Route>
        <Route path="/checkout" element={<Fifthpage/>}></Route>
        <Route path="/contact" element={<Sixthpage/>}></Route>



      
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
