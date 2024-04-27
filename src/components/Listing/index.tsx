import { ProductDTO } from '../../models/ProductDTO';
import ProductCard from '../ProductCard';
import './styles.css';

type Props = {
    productsListing: ProductDTO[];
}


export default function Listing({ productsListing }: Props) {

    return (
        <div className="dsf-listing-container dsf-card">
            <div className="dsf-listing-cards">

                {
                    productsListing.map(item => (
                        <ProductCard key={item.id} product={item} />
                    ))
                }

            </div>
        </div>
    )
}
