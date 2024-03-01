import { FC } from "react";
// ui
import { Box, InputAdornment, Stack, Typography } from "@mui/material";
import { Search, StyledButton } from "./table-style";
// icons
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

interface TableHeaderProps {
  setSerach: (value: string) => void;
  addUser: () => void;
}
const TableHeader: FC<TableHeaderProps> = ({ setSerach, addUser }) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography mr="2rem" variant="subtitle1">
        Users
      </Typography>
      <Stack direction="row">
        <Search
          placeholder="Search by ID/Name/Email/Adress"
          label="Search"
          onChange={(e) => {
            setSerach(e.target.value);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
        <StyledButton sx={{ ml: "2rem" }} variant="contained" onClick={() => addUser()}>
          <AddIcon /> New User
        </StyledButton>
      </Stack>
    </Box>
  );
};

export default TableHeader;
