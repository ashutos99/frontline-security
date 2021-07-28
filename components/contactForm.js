import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";

export default function ContactForm() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Request Submitted"
      />
      <Formik
        enableReinitialize
        initialValues={{
          formName: "contact",
          name: "",
          email: "",
          message: "",
        }}
        validationSchema={Yup.object({
          formName: Yup.string().required("Required"),
          name: Yup.string().required("Required"),
          email: Yup.string().email("Invalid email").required("Required"),
          message: Yup.string().required("Required"),
        })}
        onSubmit={(values, actions) => {
          axios
            .post("/api/job/request-callback", { ...values })
            .then((res) => {
              if (res.status == 200) {
                handleClick();
              }
            })
            .catch((err) => {
              console.log(err);
            });
          actions.resetForm();
        }}
      >
        {() => (
          <Form className="form">
            <h2 className="h2">Request a quote</h2>
            <div className="form-group">
              <Field
                fullWidth
                component={TextField}
                name="name"
                label="name"
                variant="outlined"
              />
            </div>
            <div className="form-group">
              <Field
                fullWidth
                component={TextField}
                name="email"
                label="email"
                variant="outlined"
              />
            </div>
            <div className="form-group">
              <Field
                fullWidth
                component={TextField}
                name="message"
                label="message"
                variant="outlined"
                multiline
                rows={4}
              />
            </div>
            <input
              type="submit"
              className="btn-primary"
              value="submit inquiry"
            />
          </Form>
        )}
      </Formik>
    </>
  );
}
