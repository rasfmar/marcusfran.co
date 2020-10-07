import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";

const SocialMedia = ({ image, url }) => {
  const classes = styles();
  return (
    <div style={{ display: "inline-block" }}>
      <a href={url} className={`social-media-btn ${classes.root}`}>
      </a>
    </div>
  );
}

SocialMedia.propTypes = {
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default SocialMedia;
