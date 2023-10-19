import './App.css';
import Home from './components/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar';
import VegRecipe from './components/VegRecipe';

import Nonveg from './components/Nonveg'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/veg-recipe' element={<VegRecipe/>}/>
         
          <Route path='/nonveg-recipe' element={<Nonveg/>}/>
          
        </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
