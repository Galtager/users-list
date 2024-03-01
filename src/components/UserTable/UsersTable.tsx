import { FC, useEffect, useState } from "react";
// ui
import { Box, TableBody, TableHead, TableRow, Typography } from "@mui/material";
import ConfirmModal from "../Modal/DeleteModal";
import UserModal from "../Modal/UserModal";
import { StyledTable, StyledTableCell } from "./table-style";
// store
import { RootState } from "../../store";
import { useAppDispatch, useAppSelector } from "../../hooks/useStore";
import { setUsers } from "../../slices/userSlice";
// api
import { fetchUsersAPI } from "../../api/users";
import { User } from "../../interfaces/users";
// components
import UserTableRow from "./UserTableRow";
import TableHeader from "./TableHeader";

interface UsersTableProps {}

const UsersTable: FC<UsersTableProps> = () => {
  const users = useAppSelector((state: RootState) => state.users.users);
  const dispatch = useAppDispatch();

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isUserModalOpen, setUserModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [search, setSerach] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const users = await fetchUsersAPI();
      dispatch(setUsers(users));
    } catch (error) {
      console.log(error);
    }
  };
  // create op
  const onCreateUserDialog = () => {
    setSelectedUser(null);
    setUserModalOpen(true);
  };
  // edit op
  const onOpenUserDialog = (user: User | null) => {
    setSelectedUser(user);
    setUserModalOpen(true);
  };
  // deletion op
  const onOpenDeleteModal = (user: User) => {
    setSelectedUser(user);
    setIsConfirmOpen(true);
  };

  const filteredUsers = filterUsers(users, search);
  return (
    <Box width="90%">
      <TableHeader addUser={onCreateUserDialog} setSerach={setSerach} />
      <StyledTable width="95%">
        <TableHead>
          <TableRow>
            <StyledTableCell>
              <Typography>ID</Typography>
            </StyledTableCell>
            <StyledTableCell>
              <Typography>Name</Typography>
            </StyledTableCell>
            <StyledTableCell>
              <Typography>Adress</Typography>
            </StyledTableCell>
            <StyledTableCell>
              <Typography>Actions</Typography>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredUsers.map((user, index) => (
            <UserTableRow
              index={index}
              key={user.id}
              onOpenDeleteModal={onOpenDeleteModal}
              onOpenEditDialog={onOpenUserDialog}
              user={user}
            />
          ))}
        </TableBody>
      </StyledTable>
      {isUserModalOpen && (
        <UserModal isOpen={isUserModalOpen} user={selectedUser} closeModel={() => setUserModalOpen(false)} />
      )}
      <ConfirmModal isOpen={isConfirmOpen} user={selectedUser} closeModel={() => setIsConfirmOpen(false)} />
    </Box>
  );
};

export default UsersTable;

function filterUsers(users: User[], search: string): User[] {
  if (!search) return users;

  return users.filter((user) => {
    const nameString = `${user.title} ${user.firstName} ${user.lastName}`,
      locationString = `${user.country} ,${user.city} ,${user.street}`;
    return (
      user.email.includes(search) ||
      nameString.includes(search) ||
      user.id.includes(search) ||
      locationString.includes(search)
    );
  });
}
