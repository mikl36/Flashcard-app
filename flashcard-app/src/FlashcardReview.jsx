/*
3. Review Flashcards:
    - Users can review the flashcards one by one.
    - Each flashcard will be shown with a "flip" button to show the answer.
    - Shows one flashcard at a time.
    - Has a "Flip" button to reveal the answer. useRef: For managing form inputs or handling the flip feature.
    - Has "Next" and "Previous" buttons to move between flashcards.
*/
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";

const FlashcardReview = ({ flashcards }) => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [isAnswerShown, setIsAnswerShown] = useState(false);

    useEffect(() => {
        setCurrentCardIndex(0);
        setIsAnswerShown(false);
    }, [flashcards]);

    const handleShowAnswer = () => {
        setIsAnswerShown(!isAnswerShown);
    };

    const handlePrevious = () => {
        if (currentCardIndex > 0) {
            setCurrentCardIndex(currentCardIndex - 1);
            setIsAnswerShown(false); // reset
        }
    };

    const handleNext = () => {
        if (currentCardIndex < flashcards.length - 1) {
            setCurrentCardIndex(currentCardIndex + 1);
            setIsAnswerShown(false); // reset
        }
    };

    if (!flashcards || flashcards.length === 0) {
        return <Typography variant="body1">No flashcards available.</Typography>;
    }

    const currentFlashcard = flashcards[currentCardIndex];

    return (
        <>
            <Card variant='outlined' sx={{ padding: '1em', margin: '0.5em' }}>
                <CardContent>
                    <Typography variant="h5">{currentFlashcard.question}</Typography>
                    {isAnswerShown && (
                        <Typography variant="h6" color='primary'>{currentFlashcard.answer}</Typography>
                    )}
                    <Button
                        sx={{ padding: '0.8em', margin: '0.8em' }}
                        variant="contained"
                        color="secondary"
                        onClick={handleShowAnswer}
                    >
                        {isAnswerShown ? 'Hide Answer' : 'Show Answer'}
                    </Button>
                    <Button
                        sx={{ padding: '0.8em', margin: '0.8em' }}
                        variant="contained"
                        color="info"
                        disabled={currentCardIndex <= 0}
                        onClick={handlePrevious}
                    >
                        Previous
                    </Button>
                    <Button
                        sx={{ padding: '0.8em', margin: '0.8em' }}
                        variant="contained"
                        color="info"
                        onClick={handleNext}
                        disabled={currentCardIndex === flashcards.length - 1}
                    >
                        Next
                    </Button>
                </CardContent>
            </Card>
        </>
    );
};

export default FlashcardReview;
