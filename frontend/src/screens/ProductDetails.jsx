import React from 'react';
import Products from '../products';
import { useParams } from 'react-router';
import {Row,Col,ListGroup,Button,Image, ListGroupItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductDetails = ({props}) => {
   const params = useParams();
   const {id} = params;
   const product = Products.find((p)=>p._id === id);

  return (
    <div>
        <Link to="/" className='btn btn-light'><i className='fa fa-arrow-left'></i> &nbsp; Go Back</Link>
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
                <ListGroupItem>
                    <Button className='btn-block' type="button">Add To Cart</Button>
                </ListGroupItem>
            </Col>
        </Row>
    </div>
  )
}

export default ProductDetails;