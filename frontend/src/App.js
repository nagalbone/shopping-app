import {Container} from 'react-bootstrap';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
function App() {
  return (
    <Router>
    <Header />
    <main className='my-3'>
      <Container>
        <Route path="/" component={HomeScreen} exact/>
      </Container>
    </main>
    <Footer/>
    
    </Router>
  );
}

export default App;
