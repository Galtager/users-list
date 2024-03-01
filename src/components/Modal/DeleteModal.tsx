import { FC } from "react";
// ui
import Modal from "../ui/Modal";
// store
import { remove } from "../../slices/userSlice";
import { useAppDispatch } from "../../hooks/useStore";
// interface
import { User } from "../../interfaces/users";

export interface ConfirmModalProps {
  isOpen: boolean;
  user: User | null;
  closeModel: () => void;
}

const ConfirmModal: FC<ConfirmModalProps> = (props) => {
  const { isOpen, user, closeModel } = props;
  const dispatch = useAppDispatch();

  const onDeleteUser = () => {
    if (user) {
      dispatch(remove({ id: user.id }));
      closeModel();
    }
  };

  return (
    <Modal
      confirmButtonColor="error"
      cancelButtonText="Cancel"
      confirmButtonText="Delete"
      title="Delete User"
      isOpen={isOpen}
      onConfirm={onDeleteUser}
      closeModel={closeModel}
    >
      Are you sure you want to delete?
    </Modal>
  );
};

export default ConfirmModal;
