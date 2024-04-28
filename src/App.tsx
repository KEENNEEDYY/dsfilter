import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ListingBody from './components/ListingBody'
import { ContextProductListingCount } from './utils/context-product-listing';

export default function App() {

  const [contextProductListingCount, setContextProductListingCount] = useState<number>(0);

  return (
    <ContextProductListingCount.Provider value={{ contextProductListingCount, setContextProductListingCount }}>
      <Header />
      <ListingBody />
    </ContextProductListingCount.Provider>
  )
}

