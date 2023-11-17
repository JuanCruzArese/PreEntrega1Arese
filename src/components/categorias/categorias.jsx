import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

const Categorias = () => {
    return (
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Categorias
          </Dropdown.Toggle>
    
          <Dropdown.Menu>
            <Dropdown.Item ><Link to={'/Productos/electronics'}>electronics</Link></Dropdown.Item>
            <Dropdown.Item ><Link to={'/Productos/jewelery'}>jewelery</Link></Dropdown.Item>
            <Dropdown.Item ><Link to={"/Productos/men's clothing"}>men's clothing</Link></Dropdown.Item>
            <Dropdown.Item ><Link to={"/Productos/women's clothing"}>women's clothing</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      );
}

export default Categorias