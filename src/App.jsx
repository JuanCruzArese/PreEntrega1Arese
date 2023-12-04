import './App.css'
import ItemListContainers from './components/itemListContainer/itemListContainer'
import NavBar1 from './components/navBar/navBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home/home'
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './components/notFound/notFound'
import Detalle from './components/detalle/detalle'
import DataProvider from './components/context/context'
import Cart from './components/cart/cart'

function App() {
    return (
      <>
      <DataProvider>
        <BrowserRouter>
          <NavBar1/>
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/Productos' element={ <ItemListContainers/>}/>
            <Route exact path='/Productos/:categoria' element={ <ItemListContainers/>}/>
            <Route exact path='/Producto/:id' element={<Detalle/>}/>
            <Route exact path='/Cart' element={<Cart/>}/>
            <Route exact path='*' element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
      </DataProvider>   
      </>
    )

}

export default App
