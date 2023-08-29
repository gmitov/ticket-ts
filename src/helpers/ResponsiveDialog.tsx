import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

interface ResponsiveDialogProps {
  openButtonText: string;
  dialogTitle: string;
  dialogContent: string;
  cancelButtonText: string;
  confirmButtonText: string;
  color?: "secondary" | "error" | "warning" | "info" | "success";
  handleConfirm: () => void;
}

const ResponsiveDialog: React.FC<ResponsiveDialogProps> = ({
  openButtonText,
  dialogTitle,
  dialogContent,
  confirmButtonText,
  cancelButtonText,
  color,
  handleConfirm,
}) => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const confirmHandler = () => {
    handleConfirm();
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color={color} onClick={handleClickOpen}>
        {openButtonText}
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>{dialogContent}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            {cancelButtonText}
          </Button>
          <Button onClick={confirmHandler} autoFocus>
            {confirmButtonText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ResponsiveDialog;
