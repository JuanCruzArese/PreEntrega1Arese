import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

const Categorias = () => {
    return (
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Categorias
          </Dropdown.Toggle>
    
          <Dropdown.Menu>
            <Dropdown.Item ><Link to={'/Productos/pantalones'}>Pantalones</Link></Dropdown.Item>
            <Dropdown.Item ><Link to={'/Productos/calzado'}>Calzado</Link></Dropdown.Item>
            <Dropdown.Item ><Link to={"/Productos/abrigos"}>Abrigos</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      );
}

export default Categorias