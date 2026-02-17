import React from 'react';
import './MovieCard.css';
import type { ContentItem } from '../types';

interface MovieCardProps {
    data: ContentItem;
    onDelete: (id: string) => void;
}

const getPlatformColor = (platform: ContentItem['platform']): string => {
    switch (platform) {
        case 'Netflix':
            return '#E50914';
        case 'HBO Max':
            return '#5c14db'; // Purple-ish
        case 'Disney+':
            return '#113CCF'; // Blue
        case 'Amazon Prime':
            return '#00A8E1'; // Light Blue
        case 'Cine':
            return '#fab005'; // Gold/Yellow
        default:
            return '#666'; // Gray for 'Otro'
    }
};

export const MovieCard: React.FC<MovieCardProps> = ({ data, onDelete }) => {
    const { id, title, type, platform, rating, seen, imageURL } = data;
    
    return (
        <div className="movie-card">
            <div className="card-image-container">
                <img 
                    src={imageURL} 
                    alt={title} 
                    className="card-image" 
                />
                <span 
                    className="platform-badge"
                    style={{ backgroundColor: getPlatformColor(platform) }}
                >
                    {platform}
                </span>

                {id && (
                    <button 
                        className="delete-btn"
                        onClick={(e) => {
                            e.stopPropagation(); // Evita que el clic se propague si la tarjeta tiene onclick
                            onDelete(id);
                        }}
                        title="Eliminar"
                    >
                        🗑️
                    </button>
                )}
            </div>
            
            <div className="card-content">
                <span className="card-type">{type}</span>
                <h3 className="card-title">{title}</h3>
                
                <div className="card-footer">
                    <div className="rating">
                        <span className="star-icon">⭐</span>
                        <span>{rating}/10</span>
                    </div>
                    
                    <div className={`seen-status ${seen ? 'seen' : 'not-seen'}`}>
                        {seen ? 'Vista' : 'Pendiente'}
                    </div>
                </div>
            </div>
        </div>
    );
};
