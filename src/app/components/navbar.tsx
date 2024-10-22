"use client"
import { useRouter } from 'next/navigation';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function AppNavbar(){
  const router = useRouter();
  
  const goRoute = (route:string)=>{
    router.push(route);
  }
    return(
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={()=>goRoute('/')}>Emiliano</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>goRoute('/experience')}>Experience</Nav.Link>
            <Nav.Link href="#features">Social Media</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}