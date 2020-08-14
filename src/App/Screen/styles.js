import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${theme.drawer.width}px)`,
    marginLeft: theme.drawer.width,
  },
  drawer: {
    width: theme.drawer.width,
    flexShrink: 0,
  },
  drawerPaper: {
    width: theme.drawer.width,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));
