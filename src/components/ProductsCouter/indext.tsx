

import { useContext } from 'react';
import { ContextProductListingCount } from '../../utils/context-product-listing';
import './styles.css';
export default function ProductsCounter() {

    const { contextProductListingCount } = useContext(ContextProductListingCount);

    return (
        <h5>{contextProductListingCount} produto(s)</h5>
    )
}
