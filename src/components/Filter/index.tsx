import { useState } from 'react';
import './styles.css';


type Props = {
    onFilter: Function;
}

type FormData = {
    minValue?: number;
    maxValue?: number;
}

export default function Filter({ onFilter }: Props) {

    const [formData, setFormData] = useState<FormData>({});

    function handleSubmit(event: any) {
        event.preventDefault();

        if (onFilter) {
            onFilter({
                minValue: formData.minValue || 0,
                maxValue: formData.maxValue || Number.MAX_VALUE
            });
        }
    }

    function handleChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({ ...formData, [name]: value });
    }

    return (
        <form className="dsf-card" onSubmit={handleSubmit}>
            <div className="dsf-filter-container">
                <input
                    name="minValue"
                    value={formData.minValue || ""}
                    type="text"
                    placeholder="Preço mínimo"
                    onChange={handleChange}
                />
                <input
                    name="maxValue"
                    value={formData.maxValue || ""}
                    type="text"
                    placeholder="Preço máximo"
                    onChange={handleChange}
                />
                <button type="submit"><h3>Filtrar</h3></button>
            </div>
        </form>

    )
}
