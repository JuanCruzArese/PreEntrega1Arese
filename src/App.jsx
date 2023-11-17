import './App.css'
import ItemListContainers from './components/itemListContainer/itemListContainer'
import NavBar1 from './components/navBar/navBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home/home'
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './components/notFound/notFound'

function App() {
    return (
      <>
        <BrowserRouter>
          <NavBar1/>
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/Productos' element={ <ItemListContainers/>}/>
            <Route exact path='/Productos/:categoria' element={ <ItemListContainers/>}/>
            <Route exact path='*' element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
          
      </>
    )

}

export default App
