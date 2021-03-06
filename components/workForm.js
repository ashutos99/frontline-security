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
                label="name / ?????????"
                variant="outlined"
              />
            </div>
            <div className="form-group">
              <Field
                fullWidth
                component={TextField}
                name="phone"
                label="Phone number / ???????????? ????????????"
                variant="outlined"
              />
            </div>
            <div className="form-group">
              <FormControl fullWidth variant="filled">
                <InputLabel htmlFor="gender-name">Gender / ????????????</InputLabel>
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
                <InputLabel htmlFor="skill-name">Skill / ????????????</InputLabel>
                <Field
                  component={Select}
                  name="skill"
                  id="skill-name"
                  inputProps={{ id: "skill-name" }}
                >
                  <MenuItem value="securityGuard">
                    Security Guard / ????????????????????? ???????????????
                  </MenuItem>
                  <MenuItem value="janitor">Janitor / ???????????? ????????????</MenuItem>
                  <MenuItem value="peon">Peon / ???????????????</MenuItem>
                  <MenuItem value="electrician">
                    Electrician / ??????????????? ????????????????????????
                  </MenuItem>
                  <MenuItem value="plumber">Plumber / ?????????????????????</MenuItem>
                  <MenuItem value="mason">Mason / ????????????</MenuItem>
                  <MenuItem value="computerOperator">
                    Computer Operator / ???????????????????????? ??????????????????
                  </MenuItem>
                </Field>
              </FormControl>
            </div>
            <div className="form-group">
              <FormControl fullWidth variant="filled">
                <InputLabel htmlFor="experience-name">
                  Work Experience / ????????? ?????? ???????????????
                </InputLabel>
                <Field
                  component={Select}
                  name="experience"
                  id="experience-name"
                  inputProps={{ id: "experience-name" }}
                >
                  <MenuItem value="0">0 / Fresher</MenuItem>
                  <MenuItem value="1">1 Year / 1 ????????????</MenuItem>
                  <MenuItem value="2">2 Year / 2 ????????????</MenuItem>
                  <MenuItem value="5+">5+ Year / 5+ ????????????</MenuItem>
                  <MenuItem value="10+">10+ Year / 10+ ????????????</MenuItem>
                  <MenuItem value="15+">15+ Year / 15+ ????????????</MenuItem>
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
