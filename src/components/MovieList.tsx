import React from 'react';
import { MovieCard } from './MovieCard';
import type { ContentItem } from '../types';
import './MovieList.css';

interface MovieListProps {
    items: ContentItem[];
    onDelete: (id: string) => void;
}

export const MovieList: React.FC<MovieListProps> = ({ items, onDelete }) => {
    if (items.length === 0) {
        return (
            <div className="empty-state">
                <p>No hay películas guardadas aún</p>
            </div>
        );
    }

    return (
        <div className="movie-list-grid">
            {items.map((item) => (
                <MovieCard 
                    key={item.id || item.title} 
                    data={item} 
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};
