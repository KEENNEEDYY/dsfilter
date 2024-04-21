import './styles.css';


type Props = {
    name?: string,
    value?: number;
}


export default function ProductCard({ name, value }: Props) {
    return (
        <div className="dsf-product-card-container">
            <h5>{name || "PC Gamer Pro"}</h5>
            <h4>R$ {value || "1200.00"}</h4>
        </div>
    )
}
