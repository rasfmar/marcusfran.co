import { makeStyles } from "@material-ui/styles";

const styles = makeStyles({
  container: {
    display: "inline-block",
    textAlign: "center",
    padding: "0 0.5em",
    '@media (min-width: 789px)': {
      textAlign: "left",
      padding: "0"
    }
  },
  social: {
    display: "block",
    marginTop: "1.25em"
  }
});

export default styles;
