import AccountCircle from "@material-ui/icons/AccountCircle";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { IconButton } from "common";
import { logout } from "core/store/actions/UserActions";
import React from "react";
import { connect } from "react-redux";
import { Menu, MenuItem } from "@material-ui/core";
import { useStyles } from "./styles";

function UserMenuPresentation({ dispatchLogout }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatchLogout();
  };

  return (
    <div className={classes.root}>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
        {anchorEl ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        keepMounted
        open={!!anchorEl}
        onClose={handleClose}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

const mapStateToProps = () => ({});
const mapDispatchToProps = { dispatchLogout: logout };

export const UserMenu = connect(mapStateToProps, mapDispatchToProps)(UserMenuPresentation);
