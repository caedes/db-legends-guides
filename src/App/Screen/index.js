import React from "react";
import { node, string } from "prop-types";
import { Link } from "react-router-dom";
import {
  AppBar,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";

import routes from "../routes";
import useStyles from "./styles";

export default function Screen({ children, title }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6">My React App</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {routes.map(({ name, path, IconComponent }) => (
            <ListItem button component={Link} to={path} key={path}>
              {IconComponent && (
                <ListItemIcon>
                  <IconComponent />
                </ListItemIcon>
              )}
              <ListItemText inset={!IconComponent} primary={name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <h2>{title}</h2>
        {children}
      </main>
    </div>
  );
}

Screen.propTypes = {
  children: node,
  title: string.isRequired,
};

Screen.defaultProps = {
  children: null,
};
