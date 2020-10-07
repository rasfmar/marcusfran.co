import React from "react";
import { makeStyles } from "@material-ui/styles";
import Home from "./Home";
import "../stylesheets/global.scss";

export default function() {
  const styles = makeStyles({
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh"
    }
  });
  const classes = styles();

  return (
    <div className={classes.root}>
      <Home />
    </div>
  );
}
