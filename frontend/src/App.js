import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext } from 'react';
import { Store } from './Store';

function App() {
  const { state } = useContext(Store);
  const { cart } = state;

  return (
    <BrowserRouter>
      <div className='d-flex flex-column site-container'>
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>BuyNow</Navbar.Brand>
              </LinkContainer>
              <Nav className='me-auto'>
                <Link to="/cart" className='nav-link'></Link>
                <span className='color-white'>Cart</span>
                {cart.cartItems.length > 0 && (
                  <Badge pill bg="danger">
                    {cart.cartItems.length}
                  </Badge>
                )}
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className='mt-3'>
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>

        </main>
        <div className='text-center'>2024 &copy; All rights reserved.</div>
      </div>
    </BrowserRouter>
  );
}

export default App;
