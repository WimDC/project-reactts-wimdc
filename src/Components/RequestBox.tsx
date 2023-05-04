import { Box, Typography } from "@mui/material"
import { InputBox } from "./InputBox"
import { useState } from 'react'

export const RequestBox = () => {
const [inputText, setInputText] = useState("");

    return (
        <Box>
            <InputBox inputText={inputText} setInputText={setInputText} fieldName="artikelnummer"/>
            <InputBox inputText={inputText} setInputText={setInputText} fieldName="artikelnaam"/>
        </Box>
    )
}

