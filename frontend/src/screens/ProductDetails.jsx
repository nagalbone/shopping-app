import React, { useEffect,useState } from 'react';
// import Products from '../products';
import {useDispatch,useSelector} from 'react-redux';
import { listProductDetails } from '../actions/productActions';
import { useParams } from 'react-router';
import {Row,Col,ListGroup,Button,Image, ListGroupItem,Form} from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';
import Loader from "../components/shared/spinner";
import Message from "../components/shared/Message";

const ProductDetails = ({props}) => {
    const navigate = useNavigate();
    const [qty,setQty] = useState(1);
    const params = useParams();
    const {id} = params;
    const dispatch = useDispatch();
    const productDetails = useSelector((state)=> state.productDetails);
    const {loading,error,product} = productDetails;

    useEffect(()=>{
        dispatch(listProductDetails(id));
    },[dispatch,id]);
    

    const addToCartHandler = ()=>{
        navigate({
            pathname: `/cart/${id}`,
            search: `?qty=${qty}`,
          });
    }
    
  return (
    <div>
        <Link to="/" className='btn btn-light'><i className='fa fa-arrow-left'></i> &nbsp; Go Back</Link>
        {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
        <Col md={6}>
            <Image src={product.image} alt={product.name} fluid/>
        </Col>
        <Col md={3}>
            <ListGroup variant='flush'>
                <ListGroupItem>
                    <h3>{product.name}</h3>
                </ListGroupItem>
                <ListGroupItem>
                    Rating {product.rating} From {product.numreviews} Reviews
                </ListGroupItem>
                <ListGroupItem>
                    Price: $ {product.price}
                </ListGroupItem>
                <ListGroupItem>
                    {product.description}
                </ListGroupItem>
            </ListGroup>
        </Col>
        <Col md={3}>
            <ListGroupItem>
                <Row>
                    <Col>Status:</Col>
                    <Col>{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</Col>
                </Row>
            </ListGroupItem>
            {
                product.countInStock > 0 && (
                    <ListGroupItem>
                        <Row>
                            <Col>Qty</Col>
                            <Form.Control as="select" value={qty} onChange={(e)=>setQty(e.target.value)}
                            >
                            {
                                [...Array(product.countInStock).keys()].map((x)=>(
                                    <option key={x + 1} value={x + 1}>{x + 1}</option>
                                ))
                            }
                            </Form.Control>
                        </Row>
                    </ListGroupItem>
                )
            }
            <ListGroupItem>
                <Button className='btn-block' type="button" onClick={addToCartHandler}>Add To Cart</Button>
            </ListGroupItem>
        </Col>
    </Row>
      )}

    </div>
  )
}

export default ProductDetails;