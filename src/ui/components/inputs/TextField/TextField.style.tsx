import { styled as styled } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

export const TextFieldStyle = styled(TextField)`
    .MuiInputBase-root {
        background-color: ${({theme}) => theme.palette.grey[50]};
    }

    .MuiOutlinedInput-notchedOutline {
        border-color: ${({theme}) => theme.palette.grey[100]};
    }
`