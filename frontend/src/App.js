import {Container} from 'react-bootstrap';
import {Route, Routes} from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ProductDetails from './screens/ProductDetails';
import CartScreen from './screens/CartScreen';
function App() {
  return (
    <>
      <Header />
          <main className='my-3'>
            <Container>
              <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/product/:id" element={<ProductDetails />}/>
              <Route path="/cart/:id?" element={<CartScreen />}/>
              </Routes>
            </Container>
          </main>
      <Footer/>
    </>
  );
}
export default App;
