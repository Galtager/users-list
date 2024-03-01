import { FC } from "react";
// interface
import { User } from "../../interfaces/users";
// ui
import Modal from "../ui/Modal";
import { MenuItem, Stack, TextField } from "@mui/material";
import userImg from "/user.png";
// form
import { useForm } from "react-hook-form";
// id generator
import { v4 as uuidv4 } from "uuid";
// store
import { useAppDispatch } from "../../hooks/useStore";
import { create, edit } from "../../slices/userSlice";

interface UserModalProps {
  user: User | null;
  isOpen: boolean;
  closeModel: () => void;
}

const defaultValues: User = {
  firstName: "",
  lastName: "",
  title: "Mr",
  email: "",
  picture: userImg,
  street: "",
  country: "",
  city: "",
  id: uuidv4(),
};
const UserModal: FC<UserModalProps> = ({ user, isOpen, closeModel }) => {
  const dispatch = useAppDispatch();
  const isEditMode = !!user;

  // submit methods
  const onSubmit = (user: User) => {
    if (isEditMode) {
      dispatch(edit(user));
    } else {
      dispatch(create(user));
    }
    closeModel();
  };

  // form
  const form = useForm<User>({ defaultValues: isEditMode ? user : defaultValues });
  const { register, handleSubmit, formState, getValues } = form;
  const { errors } = formState;
  return (
    <form noValidate>
      <Modal
        confirmButtonColor={isEditMode ? "info" : "success"}
        cancelButtonText="Cancel"
        confirmButtonText={isEditMode ? "Edit" : "Create"}
        title={isEditMode ? "Edit User" : "Create User"}
        isOpen={isOpen}
        onConfirm={handleSubmit(onSubmit)}
        closeModel={closeModel}
      >
        <Stack spacing={2} p="1rem" direction="column">
          <Stack spacing={2} direction="row">
            <TextField
              select
              value={getValues("title")}
              sx={{ width: "8rem" }}
              label="Title"
              helperText={errors.title?.message}
              error={!!errors.title}
              {...register("title", { required: "title is required" })}
            >
              <MenuItem value="Mr">Mr</MenuItem>
              <MenuItem value="Mrs">Mrs</MenuItem>
              <MenuItem value="Ms">Ms</MenuItem>
              <MenuItem value="Miss">Miss</MenuItem>
              <MenuItem value="Monsieur">Monsieur</MenuItem>
            </TextField>
            <TextField
              label="First Name"
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
              {...register("firstName", { required: "first name is required" })}
            />
            <TextField
              label="Last Name"
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
              {...register("lastName", { required: "last name is required" })}
            />
          </Stack>
          <TextField
            label="Email"
            error={!!errors.email}
            helperText={errors.email?.message}
            {...register("email", {
              required: "email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            })}
          />
          <Stack spacing={2} direction="row">
            <TextField
              label="Country"
              error={!!errors.country}
              helperText={errors.country?.message}
              {...register("country", { required: "country is required" })}
            />
            <TextField
              label="City"
              error={!!errors.city}
              helperText={errors.city?.message}
              {...register("city", { required: "city is required" })}
            />
            <TextField
              label="Street"
              error={!!errors.street}
              helperText={errors.street?.message}
              {...register("street", { required: "street is required" })}
            />
          </Stack>
        </Stack>
      </Modal>
    </form>
  );
};

export default UserModal;
