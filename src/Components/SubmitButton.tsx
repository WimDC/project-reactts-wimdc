import { Box, Button } from '@mui/material'

export const SubmitButton = (inputText, setInputText) => {

    const onSubmit = () => {
        setInputText[inputText];
        console.log(setInputText);
        setInputText("");
    }
    return (
        <Box>
            <Button onClick={() => onSubmit()}>Submit</Button>
        </Box>
    )
}