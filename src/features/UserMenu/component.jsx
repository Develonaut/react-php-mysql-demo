import AccountCircle from "@material-ui/icons/AccountCircle";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { IconButton } from "common";
import { PATHS } from "core/config/urls";
import { logout } from "core/store/actions/UserActions";
import React from "react";
import { connect } from "react-redux";
import { Menu, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
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
        <MenuItem to={PATHS.DASHBOARD} component={Link} onClick={handleClose}>
          Dashboard
        </MenuItem>
        <MenuItem to="#" component={Link} onClick={handleClose}>
          Storefront
        </MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

const mapStateToProps = () => ({});
const mapDispatchToProps = { dispatchLogout: logout };

export const UserMenu = connect(mapStateToProps, mapDispatchToProps)(UserMenuPresentation);
