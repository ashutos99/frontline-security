import { Formik, Form, Field } from "formik";
import { TextField, Select } from "formik-material-ui";
import * as Yup from "yup";
import { FormControl, InputLabel, MenuItem, Snackbar } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";

export default function WorkForm() {
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
    <section className="work-form">
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
          formName: "work",
          name: "",
          phone: "",
          gender: "male",
          skill: "securityGuard",
          experience: "0",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
          phone: Yup.number()
            .typeError("That doesn't look like a phone number")
            .positive("A phone number can't start with a minus")
            .integer("A phone number can't include a decimal point")
            .min(1000000000, "Enter a 10 digit phone number")
            .required("A phone number is required"),
          gender: Yup.string().required("Required").ensure(),
          skill: Yup.string().required("Required").ensure(),
          experience: Yup.string().required("Required").ensure(),
        })}
        onSubmit={(values, actions) => {
          axios
            .post("/api/job/post", { ...values })
            .then((res) => {
              if (res.status == 200) {
                handleClick();
              }
            })
            .catch((err) => {
              console.log(err.message);
            });
          actions.resetForm();
        }}
      >
        {() => (
          <Form className="form">
            <h2 className="h2">Work with us</h2>
            <span className="underline"></span>
            <div className="form-group">
              <Field
                fullWidth
                component={TextField}
                name="name"
                label="name / नाम"
                variant="outlined"
              />
            </div>
            <div className="form-group">
              <Field
                fullWidth
                component={TextField}
                name="phone"
                label="Phone number / फ़ोन नंबर"
                variant="outlined"
              />
            </div>
            <div className="form-group">
              <FormControl fullWidth variant="filled">
                <InputLabel htmlFor="gender-name">Gender / लिंग</InputLabel>
                <Field
                  component={Select}
                  name="gender"
                  id="gender-name"
                  inputProps={{ id: "gender-name" }}
                >
                  <MenuItem value="male" selected>
                    Male
                  </MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                </Field>
              </FormControl>
            </div>
            <div className="form-group">
              <FormControl fullWidth variant="filled">
                <InputLabel htmlFor="skill-name">Skill / कौशल</InputLabel>
                <Field
                  component={Select}
                  name="skill"
                  id="skill-name"
                  inputProps={{ id: "skill-name" }}
                >
                  <MenuItem value="securityGuard">
                    Security Guard / सुरक्षा कर्मी
                  </MenuItem>
                  <MenuItem value="janitor">Janitor / सफाई वाला</MenuItem>
                  <MenuItem value="peon">Peon / चपरास</MenuItem>
                  <MenuItem value="electrician">
                    Electrician / बिजली मिस्त्री
                  </MenuItem>
                  <MenuItem value="plumber">Plumber / प्लम्बर</MenuItem>
                  <MenuItem value="mason">Mason / मिस्</MenuItem>
                  <MenuItem value="computerOperator">
                    Computer Operator / कंप्यूटर ऑपरेटर
                  </MenuItem>
                </Field>
              </FormControl>
            </div>
            <div className="form-group">
              <FormControl fullWidth variant="filled">
                <InputLabel htmlFor="experience-name">
                  Work Experience / काम का अनुभव
                </InputLabel>
                <Field
                  component={Select}
                  name="experience"
                  id="experience-name"
                  inputProps={{ id: "experience-name" }}
                >
                  <MenuItem value="0">0 / Fresher</MenuItem>
                  <MenuItem value="1">1 Year / 1 वर्ष</MenuItem>
                  <MenuItem value="2">2 Year / 2 वर्ष</MenuItem>
                  <MenuItem value="5+">5+ Year / 5+ वर्ष</MenuItem>
                  <MenuItem value="10+">10+ Year / 10+ वर्ष</MenuItem>
                  <MenuItem value="15+">15+ Year / 15+ वर्ष</MenuItem>
                </Field>
              </FormControl>
            </div>
            <input
              type="submit"
              className="btn-primary"
              value="submit job application"
            />
          </Form>
        )}
      </Formik>
    </section>
  );
}
