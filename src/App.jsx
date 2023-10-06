import './App.css'
import ItemListContainers from './components/itemListContainer/itemListContainer'
import NavBar from './components/navBar/navBar'

function App() {

    const saludo = "Bienvenido a mi ecommerce"
    return (
      <>
        <NavBar/>
        <ItemListContainers greeting={saludo}/>
      </>
    )

}

export default App
