import { withStyles } from "@material-ui/core/styles/";

const styles = withStyles(theme => ({
  routeWrapper: {
    padding: 10
  },
  root: {
    flexGrow: 1,
    padding: 20,
    marginTop: 10
  },
  container: { textDecoration: "none" },
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  table: {
    minWidth: 650
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

export default styles;
