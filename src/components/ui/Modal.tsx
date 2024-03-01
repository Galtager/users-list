import { FC, ReactNode } from "react";
// ui
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, useMediaQuery, useTheme } from "@mui/material";

export interface ModalProps {
  isOpen: boolean;
  closeModel: () => void;
  onConfirm: () => void;
  children: ReactNode;
  cancelButtonText: string;
  confirmButtonText: string;
  title: string;
  confirmButtonColor: "inherit" | "error" | "primary" | "secondary" | "info" | "success" | "warning";
}

const Modal: FC<ModalProps> = (props) => {
  const { isOpen, children, cancelButtonText, confirmButtonText, title, confirmButtonColor, closeModel, onConfirm } =
    props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const onConfirmModal = async () => {
    onConfirm();
  };

  return (
    <Dialog fullScreen={fullScreen} open={isOpen} onClose={() => closeModel()} aria-labelledby="confirm-dialog">
      <DialogTitle id="confirm-dialog">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button variant="outlined" color="inherit" onClick={() => closeModel()}>
          {cancelButtonText}
        </Button>
        <Button variant="contained" color={confirmButtonColor} type="submit" onClick={onConfirmModal}>
          {confirmButtonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
