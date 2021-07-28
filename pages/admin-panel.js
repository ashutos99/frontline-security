import { parseCookies } from "../helper/cookie";
import axios from "axios";
import { Button, Snackbar, Typography } from "@material-ui/core";
import { useState } from "react";

import baseUrl from "../helper/baseURL";

export default function Admin({ token, posts }) {
  const work = posts.filter((post) => post.formName === "work");
  if (work.length == 0) {
    return (
      <div className="container row null">
        <h1>No applications yet</h1>
      </div>
    );
  }

  return (
    <>
      {work.map((post) => (
        <div key={post._id} style={{ marginBottom: "1.5em" }}>
          <div className="container">
            <PostCard post={post} />
          </div>
        </div>
      ))}
    </>
  );
}

const PostCard = ({ post }) => {
  const message = async (event, type) => {
    await axios
      .post("/api/admin/approve", { ...event, type })
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          handleClick();
        }
      })
      .catch((err) => console.log(err));
  };

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
        message="Message sent"
      />
      <div className="flex card">
        <div className="wrapper flex">
          <ul className="heading">
            <li>Name</li>
            <li>Gender</li>
            <li>Phone no.</li>
            <li>Skill</li>
            <li>Experience</li>
          </ul>
          <ul>
            <li>{post.name}</li>
            <li>{post.gender}</li>
            <li>{post.phone}</li>
            <li>{post.skill}</li>
            <li>{post.experience}</li>
          </ul>
        </div>

        <div className="action-btns">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            disableElevation
            onClick={() => message(post, "approve")}
          >
            Approve
          </Button>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            disableElevation
            onClick={() => message(post, "payment")}
          >
            Send payment Link
          </Button>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps({ req, res }) {
  const { token } = parseCookies(req);

  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
      props: {},
    };
  }

  const { data } = await axios.get(`${baseUrl}/api/admin/posts`);

  return {
    props: { token: token, posts: data }, // will be passed to the page component as props
  };
}
