import { useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import FlashcardForm from './FlashcardForm';
import FlashcardList from './FlashcardList';
import FlashcardReview from './FlashcardReview';
import useLocalStorage from './useLocalStorage';
import Typography from "@mui/material/Typography";

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [flashcards, setFlashcards] = useLocalStorage('flashcards', []);

  const handleCreateFlashcards = () => {
    setCurrentView('form');
  };
  const handleShowFlashcardList = () => {
    setCurrentView('list');
  };
  const handleShowFlashcardReview = () => {
    setCurrentView('review');
  };

  return (
    <>
      <Typography variant="h2" color='textPrimary'>Flashcard Study App</Typography>
      <div className="card">
        <Button variant="contained" color="primary" sx={{ margin: '1em', padding: '0.5em 1em' }} 
        onClick={handleCreateFlashcards}>
          Create Flashcards
        </Button>
        <Button variant="contained" color="primary" sx={{ margin: '1em', padding: '0.5em 1em' }} 
        onClick={handleShowFlashcardList}>
          View Flashcards
        </Button>
        <Button variant="contained" color="primary" sx={{ margin: '1em', padding: '0.5em 1em' }} 
        onClick={handleShowFlashcardReview}>
          Review Flashcards
        </Button>
      </div>
      {currentView === 'form' && <FlashcardForm setFlashcards={setFlashcards} />}
      {currentView === 'list' && <FlashcardList flashcards={flashcards} setFlashcards={setFlashcards} />}
      {currentView === 'review' && <FlashcardReview flashcards={flashcards} />}
    </>
  );
}

export default App;