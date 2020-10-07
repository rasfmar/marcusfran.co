import { makeStyles } from "@material-ui/styles";

const styles = makeStyles({
  container: {
    display: "inline-block",
    verticalAlign: "top",
    marginRight: "1em",
    width: "175px",
    height: "175px",
    border: "8px solid #f7f7f7",
    borderRadius: "50%",
    boxShadow: "0 8px 16px rgba(0,0,0,0.05)",
    overflow: "hidden",
    transition: "all 0.3s ease",
    "& img": {
      width: "100%",
      filter: "grayscale(80%)",
      transition: "all 1s ease"
    },
    "&:hover img": {
      filter: "grayscale(20%)"
    }
  },
  text: {
    display: "inline-block"
  }
});

export default styles;
