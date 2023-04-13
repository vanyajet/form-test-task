import React from "react";
import { Button, Modal, Paper, Typography } from "@mui/material";

interface FormDataProps {
  salutation: string;
  firstName: string;
  lastName: string;
  street: string;
  house: string;
  addressSuplement: string;
  postalCode: string;
  city: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  prescription: string;
  shippingMethod: string;
  paymentMethod: string;
  tick1: boolean;
  tick2: boolean;
  selectedFile: string | null;
}

interface ModalProps {
  open: boolean;
  onClose: () => void;
  formData: FormDataProps;
}

const ThankYouModal: React.FC<ModalProps> = ({ open, onClose, formData }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Paper
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          border: "2px solid #94ab8a",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1rem",
          }}
        >
          Thanks for applying, {formData.firstName} {formData.lastName}!
        </Typography>
        <Typography
          variant="h5"
          sx={{
            marginBottom: "1rem",
          }}
        >
          Your application details:
        </Typography>
        <Typography variant="body1">
          <b>First Name:</b> {formData.firstName}
          <br />
          <b> Last Name:</b> {formData.lastName}
          <br />
          <b> Salutation:</b> {formData.salutation}
          <br />
          <b> Shipping Address:</b> {formData.postalCode}, {formData.city},{" "}
          {formData.street}, {formData.house}, {formData.addressSuplement}.
          <br />
          <b> Your Email:</b> {formData.email}
          <br />
          <b> Your phone number:</b> {formData.phone}
          <br />
          <b> Prescription #:</b> {formData.prescription}
          <br />
          <b> Shipping Method:</b> {formData.shippingMethod}
          <br />
          <b> Payment Method:</b> {formData.paymentMethod}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            left: "50%",
            transform: "translateX(-50%)",
            marginTop: "1rem",
          }}
          onClick={onClose}
        >
          Close
        </Button>
      </Paper>
    </Modal>
  );
};

export default ThankYouModal;
