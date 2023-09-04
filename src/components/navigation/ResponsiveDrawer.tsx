import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";

import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import ShowChartIcon from "@mui/icons-material/ShowChart";

import styles from "./ResponsiveDrawer.module.css";

const drawerWidth = 240;

export default function ResponsiveDrawer(props: any) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <Toolbar />
      <Divider />
      <List>
        {/* <Link to="/" className={styles["no-link-underline"]}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Начало"} />
            </ListItemButton>
          </ListItem>
        </Link> */}

        <Link
          to="/tickets"
          className={styles["no-link-underline"]}
          onClick={handleDrawerToggle}
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ConfirmationNumberIcon />
              </ListItemIcon>
              <ListItemText primary={"Тикети"} />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link
          to="/statistics"
          className={styles["no-link-underline"]}
          onClick={handleDrawerToggle}
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ShowChartIcon />
              </ListItemIcon>
              <ListItemText primary={"Статистика"} />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link
          to="/user-profile"
          className={styles["no-link-underline"]}
          onClick={handleDrawerToggle}
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary={"Профил"} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Тикет система
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
            disableScrollLock: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}
