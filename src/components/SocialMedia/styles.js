import { makeStyles } from "@material-ui/styles";

const styles = makeStyles({
  root: {
    display: "block",
    width: "50px",
    height: "50px",
    backgroundColor: "rgba(0,0,0,0.75)",
    borderRadius: "50%",
    boxShadow: "0 8px 16px rgba(0,0,0,0.05)",
    overflow: "hidden",
    marginRight: "0.125em",
    "& img": {
      width: "100%"
    }
  }
});

export default styles;