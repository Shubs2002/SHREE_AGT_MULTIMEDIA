import React, { useState } from "react";
import { TextField, Button, Snackbar, Alert, Container, Typography, Box, CircularProgress } from "@mui/material";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.user_name || formData.user_name.length < 3) tempErrors.user_name = "Name must be at least 3 characters long";
    if (!formData.user_email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) tempErrors.user_email = "Enter a valid email address";
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) tempErrors.phone = "Phone number must be 10 digits";
    if (!formData.message || formData.message.length < 10) tempErrors.message = "Message must be at least 10 characters long";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      setSnackbar({ open: true, message: "Please fix the errors before submitting.", severity: "error" });
      return;
    }

    setLoading(true);

    const serviceID = "service_p5dyraj";
    const publicKey = "HF_KHktroXRZDZFcf";
    const templateID1 = "template_m9btq2c";
    const templateID2 = "template_j23w8jz";

    try {
      await emailjs.send(serviceID, templateID1, formData, publicKey);
      await emailjs.send(serviceID, templateID2, formData, publicKey);

      setSnackbar({ open: true, message: "Message sent successfully!", severity: "success" });
      setFormData({ user_name: "", user_email: "", phone: "", message: "" });
      setErrors({});
    } catch (error) {
      setSnackbar({ open: true, message: "Failed to send message. Try again later.", severity: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container id="contact" maxWidth="sm">
      <Box sx={{ textAlign: "center", my: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, color: "#8552fd" }}>
          Contact Us
        </Typography>
        <Typography variant="body1" sx={{ color: "gray", mb: 3 }}>
          We'd love to hear from you. Fill out the form below.
        </Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          name="user_name"
          variant="outlined"
          value={formData.user_name}
          onChange={handleChange}
          error={!!errors.user_name}
          helperText={errors.user_name}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Email"
          name="user_email"
          variant="outlined"
          value={formData.user_email}
          onChange={handleChange}
          error={!!errors.user_email}
          helperText={errors.user_email}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Phone Number"
          name="phone"
          variant="outlined"
          value={formData.phone}
          onChange={handleChange}
          error={!!errors.phone}
          helperText={errors.phone}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Message"
          name="message"
          variant="outlined"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          error={!!errors.message}
          helperText={errors.message}
          sx={{ mb: 2 }}
        />

        <Button
          fullWidth
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#8552fd",
            color: "white",
            "&:hover": { backgroundColor: "#6a40e0" },
            py: 1.5,
            fontSize: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Send Message"}
        </Button>
      </form>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity={snackbar.severity} onClose={() => setSnackbar({ ...snackbar, open: false })}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ContactForm;
