"use client"
import { useRouter } from 'next/navigation';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../page.module.css'
import { useState } from 'react';


export default function AppNavbar() {
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();

  const goRoute = (route: string) => {
    setExpanded(false);
    router.push(route);
  }
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className={styles.navbar} expanded={expanded}>
      <Container>
        <Navbar.Brand onClick={() => goRoute('/')}>Emiliano</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={()=>setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => goRoute('/experience')}>Experience</Nav.Link>
            <Nav.Link onClick={() => goRoute('/contact')}>Contact</Nav.Link>
    
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}