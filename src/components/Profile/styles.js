import { makeStyles } from "@material-ui/styles";

const styles = makeStyles({
  container: {
    display: "inline-block",
    verticalAlign: "top",
    marginRight: "1em",
    width: "175px",
    height: "175px",
    backgroundColor: "#fff",
    border: "8px solid #fff",
    borderRadius: "50%",
    boxShadow: "0 8px 16px rgba(0,0,0,0.05)",
    overflow: "hidden",
    transition: "all 0.3s ease",
    "& img": {
      width: "100%",
      transition: "all 1s ease"
    },
  },
  text: {
    display: "inline-block"
  }
});

export default styles;
