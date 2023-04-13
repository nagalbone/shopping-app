import { Card } from "react-bootstrap";

const ProductScreen = ({product})=>{
    return(
        <>
        <Card className="my-3 p-3 rounded">
            <a href={`/product/${product._id}`} >
                <Card.Img src={product.image} variant="top" width="20" height="100"/>
            </a>
            <Card.Body>
                <a href={`/product/${product._id}`}>
                    <Card.Title as="div">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </a>
                <Card.Text as="div">
                    <div className="my-3">
                        {product.rating} from {product.numreviews} Reviews
                    </div>
                </Card.Text>
                <Card.Text as="div">
                    <div className="my-3">
                        $ {product.price}
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
        </>
    )
}

export default ProductScreen;