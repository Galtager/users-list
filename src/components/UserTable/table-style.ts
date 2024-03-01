import { Button, Table, TableCell, TextField, styled } from "@mui/material";


export const StyledTable = styled(Table)(() => ({
    marginTop: '1rem',
    border: "1px solid rgb(186 186 186)",
    borderRadius: "2rem",
    borderCollapse: "unset",
    overflow: 'hidden',

}));

export const StyledTableCell = styled(TableCell)(() => ({
    border: "none",
}));

export const StyledButton = styled(Button)(() => ({
    height: '3rem',
    borderRadius: '.8rem'
}));


export const Search = styled(TextField)(() => ({
    "& .MuiInputBase-root": {
        borderRadius: ".8rem",
        height: "3rem !important"
    }
}));
