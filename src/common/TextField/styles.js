import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
    marginBottom: 0
  },
  base: {
    marginBottom: 22,
    "&.Mui-error": {
      marginBottom: "0"
    }
  }
}));
