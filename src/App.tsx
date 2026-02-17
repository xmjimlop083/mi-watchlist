import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { MovieList } from './components/MovieList';
import { MovieForm } from './components/MovieForm';
import { getMoviesFromFirebase, addMovieToFirebase, deleteMovieFromFirebase } from './firebase/movies';
import type { ContentItem } from './types';
import './App.css';

function App() {
  const [movies, setMovies] = useState<ContentItem[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const data = await getMoviesFromFirebase();
        setMovies(data);
      } catch (err) {
        console.error("Error fetching movies:", err);
        setError("Error al cargar las películas. Por favor, intenta conectar más tarde.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleAddMovie = async (newMovie: ContentItem) => {
    try {
      const docId = await addMovieToFirebase(newMovie);
      // Actualizamos el estado local con el ID real de Firebase
      const movieWithId = { ...newMovie, id: docId };
      setMovies(prevMovies => [movieWithId, ...prevMovies]);
      setIsFormOpen(false);
    } catch (err) {
      console.error("Error adding movie:", err);
      alert("Hubo un error al guardar la película. Inténtalo de nuevo.");
    }
  };

  const handleDeleteMovie = async (id: string) => {
    if (window.confirm("¿Seguro que quieres borrar esta película?")) {
        try {
            await deleteMovieFromFirebase(id);
            // Optimistic Update: Actualizamos la UI inmediatamente
            setMovies(prevMovies => prevMovies.filter(movie => movie.id !== id));
        } catch (err) {
            console.error("Error deleting movie:", err);
            alert("No se pudo eliminar la película. Inténtalo de nuevo.");
        }
    }
  };

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  return (
    <div className="App">
      <Navbar onOpenForm={handleOpenForm} />
      <main>
        {isFormOpen && <MovieForm onAdd={handleAddMovie} />}
        
        {error && (
          <div style={{ color: '#dc2626', backgroundColor: '#fee2e2', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem', textAlign: 'center' }}>
            {error}
          </div>
        )}

        {isLoading ? (
          <div style={{ textAlign: 'center', padding: '2rem', fontSize: '1.25rem', color: '#4b5563' }}>
            Cargando películas...
          </div>
        ) : (
          <MovieList items={movies} onDelete={handleDeleteMovie} />
        )}
      </main>
    </div>
  )
}

export default App
