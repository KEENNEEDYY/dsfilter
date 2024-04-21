import './styles.css';
export default function Filter() {
    return (
        <form className="dsf-card">
            <div className="dsf-filter-container">
                <input
                    type="text"
                    placeholder="Preço mínimo"
                />
                <input
                    type="text"
                    placeholder="Preço máximo"
                />
                <button><h3>Filtrar</h3></button>
            </div>
        </form>

    )
}
