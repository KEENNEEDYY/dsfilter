import { useContext, useEffect } from 'react';
import { ProductDTO } from '../../models/ProductDTO';
import ProductCard from '../ProductCard';
import './styles.css';
import { ContextProductListingCount } from '../../utils/context-product-listing';

type Props = {
    productsListing: ProductDTO[];
}


export default function Listing({ productsListing }: Props) {

    const { setContextProductListingCount } = useContext(ContextProductListingCount);

    useEffect(() => {
        setContextProductListingCount(productsListing.length);
    }, [productsListing]);

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
