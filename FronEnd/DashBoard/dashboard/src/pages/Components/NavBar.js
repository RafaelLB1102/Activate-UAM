import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/NavBar.module.css'; 

const NavBar = () => {
  const [eventosDropdownOpen, setEventosDropdownOpen] = useState(false);
  const [webinarsDropdownOpen, setWebinarsDropdownOpen] = useState(false);

  const toggleEventosDropdown = () => setEventosDropdownOpen(!eventosDropdownOpen);
  const toggleWebinarsDropdown = () => setWebinarsDropdownOpen(!webinarsDropdownOpen);

  return (
    <Navbar className={styles.navbar} light expand="md"> {/* Aplica la clase personalizada */}
      <NavbarBrand href="../">Página principal</NavbarBrand>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <Dropdown isOpen={eventosDropdownOpen} toggle={toggleEventosDropdown}>
            <DropdownToggle className={styles['nav-link']} nav caret> {/* Aplica la clase personalizada */}
              Eventos
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="../createEvent">Creación</DropdownItem>
              <DropdownItem href="../events">Visualización</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavItem>
        <NavItem>
          <Dropdown isOpen={webinarsDropdownOpen} toggle={toggleWebinarsDropdown}>
            <DropdownToggle className={styles['nav-link']} nav caret> {/* Aplica la clase personalizada */}
              Webinars
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="">Creación</DropdownItem>
              <DropdownItem href="">Visualización</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
