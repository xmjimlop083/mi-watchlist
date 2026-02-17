import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from './config';
import type { ContentItem } from '../types';

const COLLECTION_NAME = 'movies';

export const addMovieToFirebase = async (movie: ContentItem): Promise<string> => {
    try {
        // Obtenemos una referencia a la colección
        const docRef = await addDoc(collection(db, COLLECTION_NAME), {
            title: movie.title,
            type: movie.type,
            platform: movie.platform,
            rating: movie.rating,
            seen: movie.seen,
            imageURL: movie.imageURL
            // No enviamos el ID porque Firestore genera uno propio
        });
        console.log("Document written with ID: ", docRef.id);
        return docRef.id;
    } catch (e) {
        console.error("Error adding document: ", e);
        throw e;
    }
};

export const getMoviesFromFirebase = async (): Promise<ContentItem[]> => {
    try {
        const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
        const movies: ContentItem[] = [];
        
        querySnapshot.forEach((docSnapshot) => {
            // Combinamos los datos del documento con el ID generado por Firestore
            movies.push({
                id: docSnapshot.id,
                ...docSnapshot.data()
            } as ContentItem);
        });
        
        return movies;
    } catch (e) {
        console.error("Error getting documents: ", e);
        throw e;
    }
};

export const deleteMovieFromFirebase = async (id: string): Promise<void> => {
    try {
        await deleteDoc(doc(db, COLLECTION_NAME, id));
        console.log("Document successfully deleted!");
    } catch (e) {
        console.error("Error removing document: ", e);
        throw e;
    }
};
