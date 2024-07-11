import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./style.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
// import img from "../img/logo.svg";
// import img1 from "../img/Group3.svg";
// import img2 from "../img/hero-phones.png";

const style = {
  position: "relative",
  // top: "15%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 327,
  bgcolor: "background.paper",
  boxShadow: 24,
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { i18n } = useTranslation();
  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <div className="Mobile">
        <div className="container">
          <div className="Nav">
            <div className="na">
              <div className="img-mobie">
                <Link to={"/"}>
                  <img
                    src="https://zamontour.uz/assets/images/zamon.svg"
                    alt=""
                  />
                </Link>
              </div>

              <Button onClick={handleOpen} className="btn-mobile">
                {open ? (
                  <i className="fa-solid fa-xmark"></i>
                ) : (
                  <i className="fa-solid fa-bars"></i>
                )}
              </Button>
            </div>
          </div>

          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}>
            <Fade in={open}>
              <Box sx={style}>
                <Typography
                  id="transition-modal-description"
                  className="containert"
                  sx={{ mt: 2 }}>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/">About</a>
                    </li>
                    <li>
                      <a href="/">Contact</a>
                    </li>
                    <li>
                      <a href="/">Blog</a>
                    </li>
                    <li>
                      <a href="/">Careers</a>
                    </li>
                    <div className="menu-langg">
                      {" "}
                      <select
                        onChange={(e) => handleChangeLanguage(e.target.value)}
                        className="language">
                        <option value="uz" to="/">
                          UZ
                        </option>

                        <option value="en" to="/">
                          ENG
                        </option>

                        <option value="ru" to="/">
                          RU
                        </option>
                      </select>
                    </div>
                  </ul>
                </Typography>
              </Box>
            </Fade>
          </Modal>
        </div>
      </div>
    </>
  );
}
