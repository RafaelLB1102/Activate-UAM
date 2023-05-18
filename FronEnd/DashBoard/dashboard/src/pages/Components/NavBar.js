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
import logo from '../../../public/Logos_UAM-09.png';
import Image from 'next/image';
import Link from 'next/link';

const NavBar = ({ active }) => {
  const [eventosDropdownOpen, setEventosDropdownOpen] = useState(false);
  const [webinarsDropdownOpen, setWebinarsDropdownOpen] = useState(false);

  const toggleEventosDropdown = () => setEventosDropdownOpen(!eventosDropdownOpen);
  const toggleWebinarsDropdown = () => setWebinarsDropdownOpen(!webinarsDropdownOpen);

  return (
    <Navbar className={styles.navbar} light expand="md">
        <Link href={'/'}>
          <Image src={logo} alt="Logo" width={95} height={60} />
        </Link>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <Dropdown isOpen={eventosDropdownOpen} toggle={toggleEventosDropdown}>
            <DropdownToggle 
              className={`${styles['nav-link']} ${active === 'eventos' ? styles['active'] : ''}`}
              nav 
              caret
            >
              Eventos
            </DropdownToggle>
            <DropdownMenu>
                <Link href={'/createEvent'} className={styles['dropdown-item']}>
              <DropdownItem>
                  Creación
              </DropdownItem>
                </Link>
                <Link href={'/events'} className={styles['dropdown-item']}>
              <DropdownItem>
                  Visualización
              </DropdownItem>
                </Link>
            </DropdownMenu>
          </Dropdown>
        </NavItem>
        <NavItem>
          <Dropdown isOpen={webinarsDropdownOpen} toggle={toggleWebinarsDropdown}>
            <DropdownToggle 
              className={`${styles['nav-link']} ${active === 'webinars' ? styles['active'] : ''}`}
              nav 
              caret
            >
              Webinars
            </DropdownToggle>
            <DropdownMenu>
                <Link href={'/createWebinar'} className={styles['dropdown-item']}>
              <DropdownItem>
                  Creación
              </DropdownItem>
                </Link>
                <Link href={'/webminars'} className={styles['dropdown-item']}>
              <DropdownItem>
                  Visualización
              </DropdownItem>
                </Link>
            </DropdownMenu>
          </Dropdown>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
