import products from '../products';
import { Row,Col } from "react-bootstrap";
import ProductScreen from './productScreen';

const HomeScreen = ()=>{
    return(
        <>
        <Row>
            {
                products.map((product) =>(
                    <Col key={product._id} md={3}>
                        <ProductScreen product={product}/>
                    </Col>
                ))
            }
        </Row>
        </>
    )
}

export default HomeScreen;