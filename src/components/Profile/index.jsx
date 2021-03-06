import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";

const Profile = ({ image, alt, tilt, children }) => {
  const classes = styles();

  return (
    <>
      <div className={classes.container}>
        <img src={image} alt={alt} />
      </div>
      <div className={classes.text}>
        {children}
      </div>
    </>
  );
}

Profile.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  tilt: PropTypes.bool.isRequired
}

export default Profile;
