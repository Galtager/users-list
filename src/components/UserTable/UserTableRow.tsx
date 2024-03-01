import { FC } from "react";
import { User } from "../../interfaces/users";
// ui
import { StyledTableCell } from "./table-style";
import { TableRow, Typography, Avatar, Button, Box } from "@mui/material";
// icons
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

interface UserTableRowProps {
  user: User;
  onOpenEditDialog: (user: User) => void;
  onOpenDeleteModal: (user: User) => void;
  index: number;
}

const UserTableRow: FC<UserTableRowProps> = ({ user, onOpenEditDialog, onOpenDeleteModal, index }) => {
  return (
    <TableRow sx={{ backgroundColor: index % 2 ? "#fff" : "#f9fafc" }}>
      <StyledTableCell>
        <Typography>{user.id.substring(0, 5)}</Typography>
      </StyledTableCell>
      <StyledTableCell>
        <Box display="flex">
          <Avatar src={user.picture} />
          <Box ml="1rem">
            <Typography variant="body2">{`${user.title} ${user.firstName} ${user.lastName} `}</Typography>
            <Typography>{user.email}</Typography>
          </Box>
        </Box>
      </StyledTableCell>
      <StyledTableCell>
        <Typography> {`${user.country} ,${user.city} ,${user.street}`}</Typography>
      </StyledTableCell>
      <StyledTableCell>
        <Box display="flex">
          <Button color="inherit" onClick={() => onOpenEditDialog(user)}>
            <EditOutlinedIcon color="action" />
          </Button>
          <Button color="error" onClick={() => onOpenDeleteModal(user)}>
            <DeleteForeverOutlinedIcon />
          </Button>
        </Box>
      </StyledTableCell>
    </TableRow>
  );
};

export default UserTableRow;
