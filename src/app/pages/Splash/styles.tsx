import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      textAlign: "center",
    },
    container: {
      padding: theme.spacing(5),
    },
  })
);

export default useStyles