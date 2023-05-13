import { TextField, Button, Box, Typography} from "@mui/material"

export const InputBox = ({inputText, setInputText, fieldName}) => {

const onChange = (event) => {
    setInputText(event.target.value);
    console.log(event.target.value);
}

    return (
        

        <Box>
            <Typography>{fieldName}</Typography>
             <TextField type="text" value={inputText} onChange={onChange}></TextField>
             <Typography>{inputText}</Typography>
        </Box>
    )
}