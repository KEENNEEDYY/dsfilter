import { ProductDTO } from '../../models/ProductDTO';
import './styles.css';


type Props = {
    product: ProductDTO;
}


export default function ProductCard({ product }: Props) {
    return (
        <div className="dsf-product-card-container">
            <h5>{product.name}</h5>
            <h4>R$ {product.price.toFixed(2)}</h4>
        </div>
    )
}
