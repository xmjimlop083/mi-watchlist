import React from 'react';
import './Navbar.css';

interface NavbarProps {
    onOpenForm: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenForm }) => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <span>🎬</span>
                <span>TechFilms</span>
            </div>
            
            <div className="navbar-actions">
                <button className="btn-add" onClick={onOpenForm}>
                    + Añadir Película
                </button>
            </div>
        </nav>
    );
};
