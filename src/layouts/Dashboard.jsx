import React from "react";
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  Typography,
  Divider
} from "@mui/material";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Outlet, useNavigate } from "react-router-dom";


const drawerWidth = 300;

export default function DashboardLayout() {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* AppBar */}
    <AppBar
  position="fixed"
  sx={{
    zIndex: (theme) => theme.zIndex.drawer + 1,
    backgroundColor: "#ffffff", // Fond blanc (optionnel)
    bgcolor: "#873a74"             // Texte violet foncé
  }}
>
  <Toolbar>
    <Typography variant="h6" noWrap component="div">
      Dashboard des commandes
    </Typography>
  </Toolbar>
</AppBar>


      {/* Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
        }}
      >
        <Toolbar />
  

<Box sx={{ overflow: "auto" }}>
<List>
  {/* 1. Listes des commandes */}
  <ListItemButton onClick={() => navigate("/")}>
    <ListItemIcon>
      <Inventory2Icon />
    </ListItemIcon>
    <ListItemText primary="Liste des commandes" />
  </ListItemButton>

  {/* 2. Ajouter une commande */}
  <ListItemButton onClick={() => navigate("/")}>
    <ListItemIcon>
      <AddCircleOutlineIcon />
    </ListItemIcon>
    <ListItemText primary="Ajouter une commande" />
  </ListItemButton>

  {/* 3. Supprimer la commande */}
  <ListItemButton onClick={() => console.log("Supprimer une commande")}>
    <ListItemIcon>
      <DeleteIcon />
    </ListItemIcon>
    <ListItemText primary="Supprimer la commande" />
  </ListItemButton>

  {/* 4. Modifier la commande */}
  <ListItemButton onClick={() => console.log("Modifier la commande")}>
    <ListItemIcon>
      <EditIcon />
    </ListItemIcon>
    <ListItemText primary="Modifier la commande" />
  </ListItemButton>
</List>

</Box>

      </Drawer>

      {/* Contenu principal */}
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "#fdfdfdff", p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
