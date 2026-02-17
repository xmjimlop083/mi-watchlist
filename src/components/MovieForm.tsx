import React, { useState } from 'react';
import type { ContentItem } from '../types';
import './MovieForm.css';

interface MovieFormProps {
    onAdd: (newMovie: ContentItem) => void;
}

const INITIAL_STATE: Omit<ContentItem, 'id'> = {
    title: '',
    type: 'Película',
    platform: 'Netflix',
    rating: 5,
    seen: false,
    imageURL: ''
};

export const MovieForm: React.FC<MovieFormProps> = ({ onAdd }) => {
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target;
        
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' 
                ? (e.target as HTMLInputElement).checked 
                : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const newItem: ContentItem = {
            ...formData,
            id: crypto.randomUUID(),
            rating: Number(formData.rating) // Ensure it's a number
        };

        onAdd(newItem);
        setFormData(INITIAL_STATE); // Reset form
    };

    return (
        <div className="movie-form-container">
            <h2 style={{ marginBottom: '1.5rem', textAlign: 'center', color: '#1f2937' }}>
                Añadir Nuevo Contenido
            </h2>
            <form className="movie-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title" className="form-label">Título</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Ej: Star Wars"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="type" className="form-label">Tipo</label>
                    <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="form-select"
                    >
                        <option value="Película">Película</option>
                        <option value="Serie">Serie</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="platform" className="form-label">Plataforma</label>
                    <select
                        id="platform"
                        name="platform"
                        value={formData.platform}
                        onChange={handleChange}
                        className="form-select"
                    >
                        <option value="Netflix">Netflix</option>
                        <option value="HBO Max">HBO Max</option>
                        <option value="Disney+">Disney+</option>
                        <option value="Amazon Prime">Amazon Prime</option>
                        <option value="Cine">Cine</option>
                        <option value="Otro">Otro</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="rating" className="form-label">
                        Puntuación: {formData.rating}/10
                    </label>
                    <input
                        type="range"
                        id="rating"
                        name="rating"
                        min="0"
                        max="10"
                        step="0.5"
                        value={formData.rating}
                        onChange={handleChange}
                        className="form-range"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="imageURL" className="form-label">URL de la Imagen</label>
                    <input
                        type="url"
                        id="imageURL"
                        name="imageURL"
                        value={formData.imageURL}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="https://ejemplo.com/imagen.jpg"
                    />
                </div>

                <div className="form-group checkbox-group">
                    <input
                        type="checkbox"
                        id="seen"
                        name="seen"
                        checked={formData.seen}
                        onChange={handleChange}
                        className="form-checkbox"
                    />
                    <label htmlFor="seen" className="form-label" style={{ cursor: 'pointer' }}>
                        ¿Ya la has visto?
                    </label>
                </div>

                <button type="submit" className="submit-button">
                    Guardar en la lista
                </button>
            </form>
        </div>
    );
};
