/*
1. FlashcardForm Component (shown when "Create Flashcards" is selected):
    - A form for users to input the question and answer of a flashcard, 
    you will need to randomly generate an unique id.
        - Best option is uuid (https://www.npmjs.com/package/uuid)
    - A submit button to save the flashcard (which updates local storage).
    - Users enter an id, question and answer in a form.
    - Flashcards are saved to local storage when added.

*/
import { useRef, useCallback } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import useLocalStorage from './useLocalStorage';
import { v4 as uuidv4 } from 'uuid';

const FlashcardForm = ({ setFlashcards }) => {
    const questionRef = useRef('');
    const answerRef = useRef('');
    const [flashcards, setFlashcardsLocal] = useLocalStorage('flashcards', []);

    const handleAddFlashcard = useCallback(() => {
        const question = questionRef.current?.value;
        const answer = answerRef.current?.value;

        if (!question || !answer) { // no empty inputs
            alert('You need to have a question with an answer');
            return;
        }
        const newFlashcard = {
            id: uuidv4(),
            question,
            answer,
        };

        const updatedFlashcards = [...flashcards, newFlashcard];
        setFlashcardsLocal(updatedFlashcards); // update local storage
        setFlashcards(updatedFlashcards); // update state 
        questionRef.current.value = ''; // clear inputs
        answerRef.current.value = '';
    }, [questionRef, answerRef]);

    return (
        <>
            <Card variant='outlined' sx={{ padding: '1em' }}>
                <CardContent>
                    <TextField label="Question"
                        inputRef={questionRef}
                        placeholder="Give me your study question, please"
                        fullWidth
                        required
                        sx={{ marginBottom: '1em' }} 
                    />
                    <TextField label="Answer"
                        inputRef={answerRef}
                        placeholder="Give me your answer, please"
                        fullWidth
                        required
                        sx={{ marginBottom: '1em' }} 
                    />
                    <Button variant="contained" color="primary" 
                    onClick={handleAddFlashcard}>Add Flashcard</Button>
                </CardContent>
            </Card>
        </>
    );
}

export default FlashcardForm;

