import { Container, Nav, Navbar} from "react-bootstrap";

const HeaderAtas = () => {
  return (
   
    <div className="navbar">
    
  <Navbar bg="light" variant="light" color="blue">
  <Container>
    <Nav.Link href="/home"> <strong>Home </strong></Nav.Link>
  
      <Nav.Link href="/download"><strong>Download CV</strong></Nav.Link>
      <Nav.Link href="/contact"><strong>Contact</strong></Nav.Link>
      <Nav.Link href="/aboute"><strong> About me </strong></Nav.Link>
 
</Container>
  </Navbar>
<br></br>
<hr></hr>
    </div>
   
  );
};

export default HeaderAtas;
