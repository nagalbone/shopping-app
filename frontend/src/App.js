import {Container} from 'react-bootstrap';
import {Route, Routes} from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ProductDetails from './screens/ProductDetails';
function App() {
  return (
    <>
      <Header />
          <main className='my-3'>
            <Container>
              <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/product/:id" element={<ProductDetails />}/>
              </Routes>
            </Container>
          </main>
      <Footer/>
    </>
  );
}
export default App;
