import ProductsCounter from '../ProductsCouter/indext';

import './styles.css';
export default function Header() {

    return (
        <>
            <header className="dsf-header">
                <nav className="dsf-container">
                    <h1>DSFilter</h1>
                    <div className="dsf-navbar-right">
                        <ProductsCounter />
                    </div>
                </nav>
            </header>
        </>
    );
}
