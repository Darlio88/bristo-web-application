import { Routes, Route,} from 'react-router-dom'

//importing pages
import Menu from './pages/Menu'
import Home from './pages/Home';
import Items from './pages/Items'
import Cart from './pages/Cart'

//importing the navbar component
import Navbar from './components/Navbar'

function App() {
  return (
   
  <>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/menu' element={<Menu />}/>
    <Route path='/menu/:catergory' element={<Items />}/>
    <Route path='/cart' element={<Cart />}/>
    </Routes>
    </>
  );
}

export default App;
