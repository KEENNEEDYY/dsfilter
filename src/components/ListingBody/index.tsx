import { useEffect, useState } from 'react';
import Filter from '../Filter';
import Listing from '../Listing';

import { ProductDTO } from '../../models/ProductDTO';
import * as productSevice from '../../services/product-service';
import './styles.css';

type QueryParams = {
    minValue: number;
    maxValue: number;
}

export default function ListingBody() {

    const [products, setProducts] = useState<ProductDTO[]>([]);

    const [queryParams, setQueryParams] = useState<QueryParams>({
        minValue: 0,
        maxValue: Number.MAX_VALUE
    });

    useEffect(() => {
        setProducts(productSevice.findByPrice(queryParams.minValue, queryParams.maxValue));
    }, [queryParams]);

    function handleFilter(value: QueryParams) {
        setProducts([]);
        setQueryParams({ ...queryParams, maxValue: value.maxValue, minValue: value.minValue });
        setProducts(productSevice.findByPrice(queryParams.minValue, queryParams.maxValue));
    }

    return (
        <div className="dsf-listing-body dsf-container dsf-mb20 dsf-mt20">
            <Filter onFilter={handleFilter} />
            <Listing productsListing={products} />
        </div>
    )

}
