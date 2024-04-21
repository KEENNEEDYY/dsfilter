import './App.css'
import Filter from './components/Filter'
import Header from './components/Header'
import Listing from './components/Listing'

export default function App() {

  return (
    <>
      <Header />
      <div className="dsf-listing-body dsf-container dsf-mb20 dsf-mt20">
        <Filter />
        <Listing />
      </div>
    </>
  )
}

