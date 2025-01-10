/*

2. View and Manage Flashcards:
    - Users can view all flashcards in a list.
    - Displays all flashcards in a list.
    - Each flashcard will have options to edit or delete.
    - Includes "Delete" button for each flashcard.

*/
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import { ListItem, ListItemText } from '@mui/material';
import Typography from "@mui/material/Typography";

const FlashcardList = ({ flashcards, setFlashcards }) => {
    const handleRemoveFlashcard = (id) => {
        const updatedFlashcards = flashcards.filter((card) => card.id !== id);
        setFlashcards(updatedFlashcards);
    };

    const handleEditFlashcard = (id, question, answer) => {
        const updatedFlashcards = flashcards.map((card) =>
          card.id === id ? { ...card, question, answer } : card
        );
        setFlashcards(updatedFlashcards);
    };

    if (!flashcards || flashcards.length === 0) {
        return <Typography variant="body1">No flashcards available.</Typography>;
    }

    return (
        <>
            <List>
                {flashcards.map((flashcard) => (
                    <ListItem key={flashcard.id} sx={{ textAlign: 'center' }}>
                        <ListItemText primary={"Question: " + flashcard.question} 
                        secondary={"Answer: " + flashcard.answer} />
                        <Button onClick={() => handleRemoveFlashcard(flashcard.id)} sx={{ marginLeft: 2 }}>
                            Delete
                        </Button>
                    </ListItem>
                ))}
            </List>
        </>
    );
}

export default FlashcardList;